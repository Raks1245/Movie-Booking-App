const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true,
  },
  genreid : {
    type : Number,
    required : true,
  }
});

module.exports = mongoose.model('Genre', genreSchema);