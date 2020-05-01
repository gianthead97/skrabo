const socketIO = require('socket.io');

class SocketServer {
    
    constructor(server) {
        this.io = socketIO(server);
    }

    start() {
        this.io.on('connection', (socket) => {
            console.log('New user is here');
        
            socket.on('disconnect', () => {
                console.log('User is disconnected');
            });
        
            socket.on('client_draw', (data) => {
                socket.broadcast.emit('drawing', data);
            });
        });
    }
    
}



module.exports = SocketServer;