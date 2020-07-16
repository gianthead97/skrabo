const http = require('http');
const app = require('./app');


const port =  process.env.PORT || 8080;
const server = http.createServer(app);
const socketServer = require('./api/service/socketServer');

new socketServer(server).start();

console.log(process.env.PORT);
server.listen(port, () => {
  console.log(`Server listen on port ${port}.`);
});
