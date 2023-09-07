const{Artist} = require('../models/artist.model');

exports.findAllartist = async(req,res)=>{
    const artist = await Artist.find();
    res.json(artist);
}