const express = require('express');
const app = express();
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes/routes');
const mongoose = require('mongoose')

// app.use(morgan('dev'));

// remote access or make database from assets/database.json 
const MONGODB_URI = 'mongodb+srv://user:JmBaUCHT47yEZPh@mycluster.3la6m.mongodb.net/MyCluster?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI || 'mongodb://localhost/MyCluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected.')
});

// Schema
const Schema = mongoose.Schema
const wordSchema = new Schema({
  word: String,
  chosen: Number,
  given: Number,
  hit: Number
});

// Model - it will automatically give collection a name 
// with suffix s
const wordModel = mongoose.model('word', wordSchema);

// .save
// data = {
//   word: "papuca",
//   chosen:0,
//   given:0,
//   hit:0
// };

// const newWord = new wordModel(data);
// newWord.save((error) => {
//   if(error) {
//     console.log('Oooops, somsthing happend!');
//   } else {
//     console.log('Data has been saved!');
//   }
// })

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





