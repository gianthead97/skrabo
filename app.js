const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes/routes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

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





