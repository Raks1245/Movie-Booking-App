const{Movie} = require('../models/movie.model');

exports.findAllMovies = async (req, res) => {
    // Implement logic to fetch movies
    const fetchmovie = await Movie.find();
    res.json(fetchmoviemovie);
  };
  
  // GET /movies/{movieId}
  exports.findOne = async (req, res) => {
    // Implement logic to fetch a single movie by ID
    const singleMovie = await Movie.find();
    res.json(singleMovie);
  };
  
  // GET /movies/{movieId}/shows
  exports.findShows = async(req, res) => {
    // Implement logic to fetch shows of a specific movie by ID
    const specificMovie = await Movie.find();
    res.json(specificMovie);
    
  };
  
  