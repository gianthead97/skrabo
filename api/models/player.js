module.exports = class Player {
    #_points = 0;
    constructor(name) {
        this.#name = name;
    }


    get points() {
        return this.#_points;
    }

    increasePoints(newPoints) {
        this.#_points += newPoints;
    }




}