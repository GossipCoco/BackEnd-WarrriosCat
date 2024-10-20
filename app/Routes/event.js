const express = require('express');

const Event = require('../controllers/event');

const router = express.Router();

router
    .post('/', Event.GetAllEvents)
    .post('/GetPointParId/:id', Event.GetPointParId)

module.exports = router;