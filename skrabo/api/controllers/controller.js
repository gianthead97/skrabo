class Controller {

    static #rooms = [];
    static getFirstMessage(req, res, next) {
        res.status(200);
        res.json({
            message: "JS KNINDŽE"
        });
    }

    static createRoom(req, res, next) {

    }

}


module.exports = Controller;