const http = require('http');
const app = require('./app');


const port =  3000;
const server = http.createServer(app);
const socketServer = require('./api/service/socketServer');

new socketServer(server).start();


server.listen(port, () => {
  console.log(`Server listen on port ${port}.`);
});
