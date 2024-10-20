const express = require('express');
const Fiction = require('../controllers/fiction');
const router = express.Router();

router
.post('/AddRating/:id', Fiction.AddRating)
module.exports = router;