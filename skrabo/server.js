const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const socketServer = require('./api/controllers/socketServer');

new socketServer(server).start();


server.listen(port, () => {
  console.log(`Server listen on port ${port}.`);
});
