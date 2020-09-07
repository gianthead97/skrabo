/**
 * @enum
 */
const LanguageEnum = Object.freeze({ "ENGLISH": 0, "SRPSKI": 1 });


/**
 * @classdesc class that represents one private room
 */
module.exports = class Room {
    players = [];
    language
    startedGame = false;
    numOfRounds;
    duration;
    word = '';
    dashes = '';

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