module.exports = class Player {
    #_points = 0;
    #_admin;
    constructor(name, admin) {
        this.#name = name;
        this.#_admin = admin;
    }


    get points() {
        return this.#_points;
    }

    increasePoints(newPoints) {
        this.#_points += newPoints;
    }

    get admin() {
        return this.#_admin;
    }


}