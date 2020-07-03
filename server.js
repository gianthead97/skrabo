const http = require('http');
const app = require('./app');


const port =  process.env.PORT || 3000;
const server = http.createServer(app);
const socketServer = require('./api/service/socketServer');

new socketServer(server).start();


app.listen(port, () => {
  console.log(`Server listen on port ${port}.`);
});
