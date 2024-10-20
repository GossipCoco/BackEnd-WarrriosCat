const express = require('express');

const Grade = require('../controllers/grade');

const router = express.Router();

router
    .get('/', Grade.GetAllGrades);

module.exports = router;