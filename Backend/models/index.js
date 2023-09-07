const mongoose = require("mongoose");
const Movie = require('./movie.model');
const Artist = require('./artist.model');
const Genre = require('./genre.model');
const User = require('./user.model');

const db = {};

db.mongoose = mongoose;

db.Artist = require("./artist.model");
db.Genre = require("./genre.model");
db.Movie = require("./movie.model");
db.User = require("./user.model");

module.exports = db;