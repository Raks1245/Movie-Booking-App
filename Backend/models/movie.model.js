const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieid: Number,
  title: String,
  published: Boolean,
  released: Boolean,
  // ... Other fields ...
  artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
  genres: [String],
  shows: [{
    id: Number,
    theatre: { name: String, city: String },
    // ... Other show details ...
  }]
});

module.exports = mongoose.model('Movie', movieSchema);