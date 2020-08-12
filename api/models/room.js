
/**
 * @enum
 */
const LanguageEnum = Object.freeze({"ENGLISH": 0, "SRPSKI": 1});


/**
 * @classdesc class that represents one private room
 */
module.exports = class Room {
    #players = [];
    #language
    #closed = false;
    #numOfRounds;
    #duration;
    constructor(roomId, roomName) {
        this.id = roomId;
        this.roomName = roomName;
    }
    get roomId() {
        return this.id;
    }

    set numberOfRounds(num) {
        this.#numOfRounds = num;
    }

    set language(language) {
        this.#language = ("srpski" === language ? LanguageEnum.SRPSKI : LanguageEnum.ENGLISH);
    }

    set duration(duration) {
        this.#duration = duration;
    }

    get isClosed() {
        return this.#closed;
    }

    get players() {
        return this.#players;
    }

    /**
     * @summary add new player in private room
     * @param {player} player 
     */
    joinNewPlayer(player) {    
        this.#players.push(player);
        
    }
    
}
