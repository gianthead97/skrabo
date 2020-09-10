const Constants = require('../../const');
const { once, EventEmitter } = require('events');


/**
 * @class SocketController
 * @description Class which implements methods for handling events which
 *              are sent via TCP socket
 */
module.exports = class SocketController {

    constructor() {}


    /**
     * @static
     * @private
     */
    static rooms = [];

    /**
     * @description Map that contains all channel ids and their associated sockets
     */
    static sockets = new Map();

    /**
     * @description Map that contains rooms codes and their EventEmitter instances, to signalize some stuff internal on server
     */
    static eventEmmitters = new Map();


    static intervalVars = new Map();

    /**
     * @description Function which handle event that contains data for drawing
     *              which comes from channel with some code
     *              and broadcasts to all other clients that listening on same channel
     * @param {string} code Channel id
     * @returns {Function} Callback function which will broadcast object that contains necessary data
     *                   to other client for drawing elements on canvas when some client sends to channel
     */
    static onClientDrawing(code) {
        console.warn(code);
        return function(data) {
            this.to(code).emit(Constants.drawing, data);
        };
    }

    /**
     * @description Function which handle message which comes from channel with some code
     *               and broadcasts to all other clients that listening on same channel
     *              and checking does word match with selected word in specific room
     * @param {string} code Channel id
     * @returns {Function} Callback function which will broadcast new message when some client sends to channel
     */
    static onNewMessage(code) {
        return function({ message, color }) {
            let room = SocketController.rooms.find(x => x.roomId === code);
            let chosenWord = room.chosenWord;
            let word = (message.split(':')[1]).trim();
            if (word == chosenWord) {
                let playerName = message.split(':')[0].trim();
                message = playerName + ' guessed the word!';
                color = 'lightseagreen';
                this.io.in(code).emit(Constants.guessedSound);
                room.players.forEach(player => {
                    if (player.name == playerName) {
                        const timestampFactor = 2;
                        const maxPoints = 500;
                        const rankFactor = Math.round(300 / room.players.length);
                        let points = (parseInt(room.duration) - room.timestamp) * timestampFactor + maxPoints - rankFactor * room.playersThatGueseed++;
                        player.increasePoints(points);
                    }
                })
            }

            this.io.in(code).emit(Constants.message, {
                'message': message,
                'color': color
            });
        }
    }


    /**
     * @description Callback which sets flag gameStarted to true.
     * @param {string} code, id of room
     */
    static onStartGame(code) {
        return () => {
            try {
                SocketController.rooms.find((room) => room.roomId === code).startGame();
            } catch {
                console.error("Room not found!");
            };
        }
    }


    /**
     * @description Main function that handle connection event of new clients to server, and call all other
     *              callbacks that are necessary.
     * @param {SocketIO.Socket} socket
     */
    static onJoinGame(socket) {
        return function({ code, username, admin }) {

            let room = SocketController.rooms.find((room) => room.roomId === code);
            if (room) {
                //set socket to listen on concrete channel
                console.log('New user is in the room.');
                socket.join(code);
                room.joinNewPlayer(username, admin, code);
                if (SocketController.sockets.has(code)) {
                    SocketController.sockets.get(code).set(username, socket);
                } else {
                    SocketController.sockets.set(code, new Map());
                    SocketController.sockets.get(code).set(username, socket);
                    SocketController.eventEmmitters.set(code, new EventEmitter());
                }
                SocketController.emitChangeInRoom(code);
                //waiting for drawing event and broadast data to all players in room
                socket.on(Constants.clientDrawing, SocketController.onClientDrawing(code).bind(socket));

                //waiting for message data and broadcast
                socket.on(Constants.newMessage, SocketController.onNewMessage(code).bind(this));

                //waiting for start game signal
                socket.on(Constants.startGame, SocketController.onStartGame(code));
                //waiting for word to be chosen
                socket.on(Constants.wordChosen, SocketController.onWordChosen(code).bind(this));
                SocketController.sockets.get(code).forEach(socket => socket.to(code).emit(Constants.wordChosen));

            } else {
                socket.emit(Constants.errorMsg, `Room with code: ${code} does not exist.`);
            }

        };
    }

    /**
     * @description Function for sending dashes instead of word to client
     * @param {string} code Channel id
     * @returns {Function} Callback function which will broadcast number of letter of chosen word
     */
    static onWordChosen(code) {
        return function({ word }) {
            SocketController.eventEmmitters.get(code).emit(Constants.emitSelectedWord, word);
            let room = SocketController.rooms.find(x => x.roomId === code);
            room.setWord(word);
            let dashes = '';
            for (let i = 0; i < word.length; i++) {
                if (word[i] === ' ') {
                    dashes += ' ';
                } else {
                    dashes += '_';
                }
            }
            this.io.in(code).emit(Constants.wordChosen, {
                word: dashes
            });
        }
    }


    /**
     * @description Function which log when some user is gone
     */
    static onDisconnect() {
        console.log('User is disconnected');
    }


    /**
     * @description For every change in room with `code` notify all cients that something happened.
     * @param {string} code
     */
    static emitChangeInRoom(code) {
        SocketController.sockets.get(code).forEach(socket => socket.to(code).emit(Constants.changeInRoom));
    }

    /**
     * @description Function that signals clients to toggle canvas on enable/disable mode 
     * @param {string} playerName 
     * @param {string} code 
     */
    static toggleCanvas(playerName, code) {
        SocketController.sockets.get(code).forEach(socket => socket.to(code).emit(Constants.toggleCanvas, playerName));
    }


    /**
     * @description 
     * @param {string} playerName 
     * @param {string} code 
     */
    static async selectWord(playerName, code) {
        SocketController.sockets.get(code).forEach((socket, username) => {
            if (playerName === username) {
                socket.emit(Constants.selectAWord);
            } else {
                socket.emit(Constants.youWillPlay, playerName);
            }
        });
        await once(SocketController.eventEmmitters.get(code), Constants.emitSelectedWord);
        return;
    }


    /**
     * @description Function that handler timer during one turn and reset all important variables for next turn
     * @param {string} code 
     * @param {number} duration 
     */
    static async runTimer(code, duration) {
        let room = SocketController.rooms.find(x => x.roomId === code);
        room.timestamp = duration;
        SocketController.intervalVars.set(code, setInterval(() => {
            room.timestamp--;
            SocketController.sockets.get(code).forEach(socket => socket.to(code).emit(Constants.newTimestamp, (room.timestamp + '')));
            console.log("timestamp: ", room.timestamp);
            if (room.timestamp == 0) {
                clearInterval(SocketController.intervalVars.get(code));
                SocketController.eventEmmitters.get(code).emit(Constants.turnIsOver, {});
                room.playersThatGueseed = 0;
            }
        }, 1000));
        await once(SocketController.eventEmmitters.get(code), Constants.turnIsOver);
    }
}