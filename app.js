const express = require('express');
const app = express();
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes/routes');

// app.use(morgan('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

 // Add this
 if (req.method === 'OPTIONS') {

      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, OPTIONS');
      res.header('Access-Control-Max-Age', 120);
      return res.status(200).json({});
  }

  next();

});
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use("/", routes);



app.use(errorHandler);



app.use((req, res, next) => {
  const error = new Error("File not found");
  error.status = 404;
  next(error);
});



function errorHandler(error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      info: error.message
    }
  });
}




module.exports = app;





