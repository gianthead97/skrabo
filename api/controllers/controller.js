
const Room = require('../models/room');
const uuid = require('uuid');

class Controller {


    static #rooms = [];
    
    static get rooms() {
        return this.#rooms;
    }
    
    static createRoom(req, res, next) {
        console.log(req.body.name);
        let room = new Room(uuid.v1().substr(0, 6), req.body.name);
        Controller.#rooms.push(room);
        res.status(201);
        console.log("id: " + room.id);
        res.json(room.id);
    }

    static getNameOfRoom(req, res, next) {
       
        let room = Controller.#rooms.find(x => x.roomId === req.params.idSobe);
        if (room === undefined) {
            next();
        } else {
            res.status(200).json(room.roomName);
        }
    }

    static setRules(req, res, next) {
        console.log(req.body);
        let {id, duration, numOfRounds, language} = req.body;

        let room = Controller.#rooms.find(value => (value.roomId === id));
        if (room !== undefined) {
            room.duration = duration;
            room.numberOfRounds = numOfRounds;
            room.language = language;
            res.status(200).json(id);
        } else {
            next();
        }

    }
}


module.exports = Controller;
