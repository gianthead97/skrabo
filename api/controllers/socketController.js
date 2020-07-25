const Controller = require('./controller')
module.exports.onDisconnect = () => {
    console.log('User is disconnected');
};

let onNewMessage = function(code) {
        return function({ message, color })  {
        this.io.in(code).emit('message', {
            'message': message,
            'color': color
        });
    }
};


let onClientDrawing =  function(code) {
    console.warn(code);
    return function(data) {
        this.to(code).emit('drawing', data);
    };
}



module.exports.onJoinGame = function(socket) {
    return function(code) {
        console.log(code);
        if (Controller.rooms.some((room) => room.roomId === code)) {
            //set socket to listen on concrete channel
            console.log('New user is in the room.');
            socket.join(code);
            //waiting for drawing event and broadast data to all players in room
            socket.on('client-drawing', onClientDrawing(code).bind(socket));

            //waiting for message data and broadcast
            socket.on('new-message', onNewMessage(code).bind(this));

        } else {
            socket.emit('error-msg', `Room with code: ${code} does not exist.`);
        }

    };
}