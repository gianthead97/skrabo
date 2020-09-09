const SocketController = require('../controllers/socketController');
const Player = require('./player');
/**
 * @enum
 */
const LanguageEnum = Object.freeze({ "ENGLISH": 0, "SRPSKI": 1 });


/**
 * @classdesc class that represents one private room
 */
module.exports = class Room {
    players = [];
    language;
    startedGame = false;
    numOfRounds;
    duration;
    word = '';
    dashes = '';
    playersThatGueseed = 0;
    timestamp = 0;

    constructor(roomId, roomName) {
        this.id = roomId;
        this.roomName = roomName;
    }
    get roomId() {
        return this.id;
    }

    get isGameStarted() {
        return this.startedGame;
    }
    get chosenWord() {
        return this.word;
    }

    set numberOfRounds(num) {
        this.numOfRounds = num;
    }

    set language(language) {
        this.language = ("srpski" === language ? LanguageEnum.SRPSKI : LanguageEnum.ENGLISH);
    }

    set duration(duration) {
        this.duration = duration;
    }

    /**
     * @description Counting times until end of turn while players guess
     */
    async startGuessing() {
        SocketController.sockets.get(this.id).forEach(socket => socket.to(this.id).emit('turnStarted', {}));
        await SocketController.runTimer(this.roomId, parseInt(this.duration));
        SocketController.sockets.get(this.id).forEach(socket => socket.to(this.id).emit('turnEnded', {}));
    }

    /**
     * @description Function that handles turn by one player in one round
     * @param {number} index 
     */
    async runTurn(index) {
        SocketController.toggleCanvas(this.players[index].name, this.roomId);
        await this.players[index].waitToPickAWord();
        await this.startGuessing();
    }

    /**
     *   @description Entrypoint to handling gameplay   
     */
    async startGame() {
        this.startedGame = true;
        for (let i = 0; i < parseInt(this.numOfRounds); i++) {
            for (let j = 0; j < this.players.length; j++) {
                console.log(i, j);
                await this.runTurn(j);
            }
        }


        console.log("GAME IS OVER IN ROOM: ", this.roomName);
        console.log("IM DONEEEEEEEE");
    }


    /**
     * @summary add new player in private room
     * @param {player} player 
     */
    joinNewPlayer(username, admin, code) {
        let newPlayer = new Player(username, admin, code);
        console.log("new player ", newPlayer.name);
        if (this.startedGame) {
            return;
        }
        this.players.push(newPlayer);
    }

    /**
     * @summary change current word after every round
     * @param {word} word 
     */
    setWord(word) {
        console.log("new word ", word);
        this.word = word;
    }

    /**
     * @summary get dashes instead of letters
     * @param {word} word 
     */
    getDashes() {
        this.dashes = '';
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === ' ') {
                this.dashes += ' ';
            } else {
                this.dashes += '_';
            }
        }
        return this.dashes;
    }

}