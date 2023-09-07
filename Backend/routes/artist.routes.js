const express = require('express');
const router = express.Router();
const{Artist} = require('../models/artist.model');

router.get("/artists", artistController.findAllArtists);

module.exports = router;
