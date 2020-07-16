const http = require('http');
const app = require('./app');


const port =  80 || 3000;
const server = http.createServer(app);
const socketServer = require('./api/service/socketServer');

new socketServer(server).start();

console.log(process.env.PORT);
server.listen(port, 'localhost', () => {
  console.log(`Server listen on port ${port}.`);
});
