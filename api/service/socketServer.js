const socketIO = require('socket.io');
const socketController = require('../controllers/socketController');
class SocketServer {

    constructor(server) {
        this.io = socketIO(server);
    }

    start() {
        //Wait for 'connection' event
        this.io.on('connection', (socket) => {
            console.log('New user is here');
            //after connection happens wait on socket for event 'JoinGame'
            socket.on('joinGame', socketController.onJoinGame(socket).bind(this));

            //check for disconnection
            socket.on('disconnect', socketController.onDisconnect);
        });
    }

}



module.exports = SocketServer;
