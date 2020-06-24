module.exports = class Room {
    #players = [];
    constructor(roomId, roomName) {
        this.id = roomId;
        this.roomName = roomName;
    }
    get roomId() {
        return this.roomId;
    }
    
}