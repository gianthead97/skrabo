const SocketController = require("../controllers/socketController");


/**
 * 
 * @class Player
 */
module.exports = class Player {
    _points = 0;
    
    constructor(name, admin, code) {
        this._name = name;
        this._admin = admin;
        this._code = code;
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
    increasePoints(newPoints) {
        this._points += newPoints;
        SocketController.emitChangeInRoom(this._code);
    }


}

