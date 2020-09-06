
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
    closed = false;
    numOfRounds;
    duration;
    choosenWord = '';

    constructor(roomId, roomName) {
        this.id = roomId;
        this.roomName = roomName;
    }
    get roomId() {
        return this.id;
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
     * @summary add new player in private room
     * @param {player} player 
     */
    joinNewPlayer(player) {    
        console.log("new player ", player.name);
        this.players.push(player);   
    }

    /**
     * @summary change current word after every round
     * @param {word} word 
     */
    setWord(word) {    
        console.log("new word ", word);
        this.word = word;   
    }
    
}
