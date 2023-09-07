const express = require('express');
const router = express.Router();
const{Movie} = require('../models/movie.model');

router.get("/movies", movieController.findAllMovies);

// GET /movies/:movieId
router.get("/movies/:movieId", movieController.findOne);

// GET /movies/:movieId/shows
router.get("/movies/:movieId/shows", movieController.findShows);

module.exports = router;