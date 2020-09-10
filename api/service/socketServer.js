const Constants = require('../../const');
const socketIO = require('socket.io');
const SocketController = require('../controllers/socketController');

/**
 * @class SocketServer
 * @description Implementation of TCP part of server
 */
class SocketServer {

    constructor(server) {
        this.io = socketIO(server);
    }


    /**
     * @summary Main 'thread' of server
     */
    start() {
        //Wait for 'connection' event
        this.io.on(Constants.connection, (socket) => {
            // console.log('New user is here');
            //after connection happens wait on socket for event 'JoinGame'
            socket.on(Constants.joinGame, SocketController.onJoinGame(socket).bind(this));
            //check for disconnection
            socket.on(Constants.disconnect, SocketController.onDisconnect(socket));
        });
    }

}



module.exports = SocketServer;
