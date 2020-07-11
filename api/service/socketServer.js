const socketIO = require('socket.io');
const Conteroller = require('../controllers/controller');
class SocketServer {

    constructor(server) {
        this.io = socketIO(server);
    }

    start() {
        //Wait for 'connection' event
        this.io.on('connection', (socket) => {
            console.log('New user is here');
            
            //after connection happens wait on socket for event 'JoinGame'
            socket.on('joinGame', (code) => {  
                console.log(code);              
                if (Conteroller.rooms.some((room) => room.roomId === code)) {
                    //set socket to listen on concrete channel
                    console.log('New user is in the room.');
                    socket.join(code);

                    //waiting for drawing event and broadast data to all players in room
                    socket.on('client-drawing', (data) => {
                        socket.to(code).emit('drawing', data);
                    });
        
                    //waiting for message data and broadcast
                    socket.on('new-message', ({ message, color }) => {
                        console.log(message);
                        this.io.in(code).emit('message', {
                            'message': message,
                            'color': color
                        });
                    });

                } else {
                    socket.emit('error-msg', `Room with code: ${code} does not exist.`);
                }
                
            });





            socket.on('disconnect', () => {
                // console.log('User is disconnected');
            });

            
            
        });
    }

}



module.exports = SocketServer;
