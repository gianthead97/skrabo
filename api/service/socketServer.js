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

    start() {
        //Wait for 'connection' event
        this.io.on('connection', (socket) => {
            // console.log('New user is here');
            //after connection happens wait on socket for event 'JoinGame'
            socket.on('joinGame', SocketController.onJoinGame(socket).bind(this));

            //check for disconnection
            socket.on('disconnect', SocketController.onDisconnect);
        });
    }

}



module.exports = SocketServer;
