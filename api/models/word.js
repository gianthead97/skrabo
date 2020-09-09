const mongoose = require('mongoose')

// Schema
const Schema = mongoose.Schema;
const wordSchema = new Schema({
    word: String,
    chosen: Number,
    given: Number,
    hit: Number
});

// Model - it will automatically give collection a name 
// with suffix s
const wordModel = mongoose.model('word', wordSchema, 'words');
const wordModelSrb = mongoose.model('srb_word', wordSchema, 'srb_words');

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

module.exports = { eng: wordModel, srb: wordModelSrb };