const SocketController = require("../controllers/socketController");


/**
 * 
 * @class Player
 */
module.exports = class Player {
    #_points = 0;
    #_admin;
    #_name;
    #_code;
    constructor(name, admin, code) {
        this.#_name = name;
        this.#_admin = admin;
        this.#_code = code;
    }


    get points() {
        return this.#_points;
    }

    increasePoints(newPoints) {
        this.#_points += newPoints;
        SocketController.emitChangeInRoom(this.#_code);
    }

    get admin() {
        return this.#_admin;
    }


}

