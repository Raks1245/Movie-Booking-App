const express = require('express');
const router = express.Router();
const{User} = require('../models/user.model');

const userController = require('../controllers/user.controller');

router.post('/auth/signUp', userController.signUp);

router.post('/auth/login', userController.login);
const credentials = window.btoa(username + ':' + password);

router.post('/auth/logout', userController.logOut);

router.get("/auth/getCouponCode/:userId", userController.getCouponCode);

router.post("/auth/bookShow/:userId", userController.bookShow);

module.exports = router;