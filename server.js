const http = require('http');
const app = require('./app');


const port =  process.env.PORT || 3000;
const socketServer = require('./api/service/socketServer');

let server = app.listen(port, () => {
  console.log(`Server listen on port ${port}.`);
});


new socketServer(server).start();


