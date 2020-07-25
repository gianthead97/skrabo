const LanguageEnum = Object.freeze({"ENGLISH": 0, "SRPSKI": 1});

module.exports = class Room {
    #players = [];
    #language
    #closed = false;
    #numOfRounds;
    #duration;
    constructor(roomId, roomName, language, numOfRounds, duration) {
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

    joinNewPlayer(player) {
        this.#players.push(player);
    }
    
}