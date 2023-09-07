const express = require('express');

const{Genre} = require('../models/genre.model');

const router = express.Router();
const genreController = require('../controllers/genre.controller');

router.get('/genre', genreController.findAllgenre);

module.exports = router;