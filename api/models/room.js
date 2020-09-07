
/**
 * @enum
 */
const LanguageEnum = Object.freeze({"ENGLISH": 0, "SRPSKI": 1});


/**
 * @classdesc class that represents one private room
 */
module.exports = class Room {
    players = [];
    language
    startedGame = false;
    numOfRounds;
    duration;

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

    set numberOfRounds(num) {
        this.numOfRounds = num;
    }

    set language(language) {
        this.language = ("srpski" === language ? LanguageEnum.SRPSKI : LanguageEnum.ENGLISH);
    }

    set duration(duration) {
        this.duration = duration;
    }

    startGame() {
        this.startedGame = true;
        
    }
   

    /**
     * @summary add new player in private room
     * @param {player} player 
     */
    joinNewPlayer(player) {    
        console.log("new player ", player.name);
        if (this.startedGame) {
            return;
        }
        this.players.push(player);   
    }
    
}
