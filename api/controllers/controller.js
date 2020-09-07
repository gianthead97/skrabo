const Room = require('../models/room');
const uuid = require('uuid');


/**
 * @classdesc class which controls REST API on server
 */
module.exports = class Controller {

    constructor() {}

    /**
     * @static
     * @private
     */
    static rooms = [];




    /**
     * @summary Callback for handling post request for creating new private room
     * @param {Function} req 
     * @param {Function} res 
     * @param {Function} next 
     */
    static createRoom(req, res, next) {
        console.log(req.body.name);
        let room = new Room(uuid.v1().substr(0, 6), req.body.name);
        Controller.rooms.push(room);
        res.status(201).json(room.id);
    }

    /**
     * @summary Callback which send name of room for players that aren't admin of room
     * @param {Function} req 
     * @param {Function} res 
     * @param {Function} next 
     */
    static getNameOfRoom(req, res, next) {

        let room = Controller.rooms.find(x => x.roomId === req.params.idSobe);
        if (room === undefined) {
            next();
        } else {
            res.status(200).json(room.roomName);
        }
    }

    static setRules(req, res, next) {
        console.log(req.body);
        let { id, duration, numOfRounds, language } = req.body;

        let room = Controller.rooms.find(value => (value.roomId === id));
        if (room !== undefined) {
            room.duration = duration;
            room.numberOfRounds = numOfRounds;
            room.language = language;
            res.status(201).json(id);
        } else {
            next();
        }

    }

    /**
     * @summary Callback for sending data about players in room to client 
     * @param {Function} req 
     * @param {Function} res 
     * @param {Function} next 
     */
    static getPlayers(req, res, next) {
        let roomId = req.params.roomId;
        let room = Controller.rooms.find(value => (value.roomId === roomId));
        if (room !== undefined) {
            res.status(200).json(room.players);
        } else {
            next();
        }
    }

    /**
     * @summary Callback for sending dashes instead of words for clients that aren't drawing
     * @param {Function} req 
     * @param {Function} res 
     * @param {Function} next 
     */
    static getDashes(req, res, next) {
        let roomId = req.params.roomId;
        let room = Controller.rooms.find(value => (value.roomId === roomId));
        if (room !== undefined) {
            res.status(200).json(room.getDashes());
        } else {
            next();
        }
    }

    /**
     * @summary Callback for sending words to choose from to client
     * @param {Function} req 
     * @param {Function} res 
     */
    static getWord(req, res) {
        wordModel.find({})
            .then((data) => {
                console.log(data.length);
                const index1 = Math.floor(Math.random() * data.length);
                const index2 = Math.floor(Math.random() * data.length);
                const index3 = Math.floor(Math.random() * data.length);

                const d1 = data[index1];
                const d2 = data[index2];
                const d3 = data[index3];

                res.json([d1, d2, d3]);
            })
            .catch((error) => {
                console.log('Error while getting words.')
            });
    }
}