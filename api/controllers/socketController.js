const Constants = require('../../const');
const Player = require('../models/player');
const Controller = require('../controllers/controller');



/**
 * @class SocketController
 * @description Class which implements methods for handling events which
 *              are sent via TCP socket
 */
module.exports = class SocketController {

    constructor() {}

    /**
    * @description Map that contains all channel ids and their associated sockets
    */
    static sockets = new Map();


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
    * @param {string} code Channel id
    * @returns {Function} Callback function which will broadcast new message when some client sends to channel
    */
    static onNewMessage(code) {
        return function({ message, color })  {
            this.io.in(code).emit(Constants.message, {
                'message': message,
                'color': color
            });
        }
    }



    /**
     * @description Main function that handle connection event of new clients to server, and call all other
     *              callbacks that are necessary.
     * @param {SocketIO.Socket} socket
     */
    static onJoinGame(socket) {
        return function({code, username}) {
            
            let room = Controller.rooms.find((room) => room.roomId === code);
            if (room) {
                //set socket to listen on concrete channel
                console.log('New user is in the room.');
                socket.join(code);
                let newPlayer = new Player(username, false, code);
                room.joinNewPlayer(newPlayer);
                if (SocketController.sockets.has(code)) {
                    SocketController.sockets.get(code).push(socket);
                } else {
                    SocketController.sockets.set(code, new Array(socket));
                }
                SocketController.emitChangeInRoom(code);
                //waiting for drawing event and broadast data to all players in room
                socket.on(Constants.clientDrawing , SocketController.onClientDrawing(code).bind(socket));

                //waiting for message data and broadcast
                socket.on(Constants.newMessage, SocketController.onNewMessage(code).bind(this));

            } else {
                socket.emit(Constants.errorMsg, `Room with code: ${code} does not exist.`);
            }

        };
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
}





