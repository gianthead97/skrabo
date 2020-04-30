class Controller {

    static getFirstMessage(req, res, next) {
        res.status(200);
        res.json({
            message: "JS KNINDŽE"
        });
    }

}


module.exports = Controller;