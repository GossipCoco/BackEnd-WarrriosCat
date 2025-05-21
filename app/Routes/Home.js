const express = require('express');

const Home = require('../controllers/home');

const router = express.Router();

router
    .get('/', Home.get)
    .get('/FAQ', Home.GetFaq)

module.exports = router;