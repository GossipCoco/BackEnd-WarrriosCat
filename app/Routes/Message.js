const express = require('express');
const Message = require('../controllers/message')

const router = express.Router()

router
    .post('/ChangeStatusMessage/:id', Message.ChangeStatusMessage)
    .post('/GetMessageByReceiverId/:id', Message.GetMessageByReceiverId)

module.exports = router;