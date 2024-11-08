const express = require('express');
const Kind = require('../controllers/kind')

const router = express.Router()

router
    .get('/', Kind.GetAllKinds)
module.exports = router