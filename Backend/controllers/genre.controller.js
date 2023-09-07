const{Genre} = require('../models/genre.model')

exports.findAllgenre = async(req,res)=>{
    const genres = await Genre.find();
    res.json(genres);
}

  