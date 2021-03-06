const SocketController = require("../controllers/socketController");


/**
 * 
 * @class Player
 */
module.exports = class Player {
    _points = 0;
    _isGuessed = false;

    constructor(name, admin, code) {
        this._name = name;
        this._admin = admin;
        this._code = code;

        let num = 1;
        if (!admin) {
            num = Math.ceil((Math.random() * 26)) + 1;
        }
        this._profile = "../../assets/pandice/" + num + ".png";
    }


    get points() {
        return this._points;
    }

    get admin() {
        return this._admin;
    }

    get name() {
        return this._name;
    }

    get profile() {
        return this._profile;
    }


    get isGuessed() {
        return this._isGuessed;
    }

    set guessed(newValue) {
        this._isGuessed = newValue;
    }
    
    increasePoints(newPoints) {
        this._points += newPoints;
        SocketController.emitChangeInRoom(this._code);
    }

    /**
     * @description Just inner_layer function, set to better readability of code
     */
    async waitToPickAWord() {
        await SocketController.selectWord(this.name, this._code);
        return;
    }

}

