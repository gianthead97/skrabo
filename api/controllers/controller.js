const Room = require('../models/room');
const uuid = require('uuid');

class Controller {

    static rooms = [];
    
    static createRoom(req, res, next) {
        console.log(req.body.name);
        let room = new Room(uuid.v1().substr(0, 6), req.body.name);
        Controller.rooms.push(room);
        res.status(201);
        res.json(room.id);
    }


    static getNameOfRoom(req, res, next) {
       
        console.log(Controller.rooms);
        let room = Controller.rooms.find(x => x.roomId === req.params.idSobe);
        res.status(200).json(room.roomName);
    }

}


module.exports = Controller;