const express = require('express');
const Fiction = require('../controllers/fiction');
const router = express.Router();

router
.post('/UpdateRating/:id', Fiction.UpdateRating)
module.exports = router;