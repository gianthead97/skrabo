module.exports = class Room {
    #players = [];
    #closed = false;
    #numOfRounds;
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

    get isClosed() {
        return this.#closed;
    }

    joinNewPlayer(player) {
        this.#players.push(player);
    }
    
}