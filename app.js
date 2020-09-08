const express = require('express');
const app = express();
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes/routes');
const mongoose = require('mongoose')

// app.use(morgan('dev'));

// remote access or make database from assets/database.json 
const MONGODB_URI = 'mongodb+srv://user:JmBaUCHT47yEZPh@mycluster.1n45z.mongodb.net/MyCluster?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI || 'mongodb://localhost/MyCluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected.')
});


app.use(cors());
// app.use(morgan());
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





