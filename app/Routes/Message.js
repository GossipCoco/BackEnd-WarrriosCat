const express = require('express');
const Message = require('../controllers/message')

const router = express.Router()

router
    .get('/CountUnreadMessages/:id', Message.CountUnreadMessages)
    .post('/ChangeStatusMessage/:id', Message.ChangeStatusMessage)
    .post('/GetMessageByReceiverId/:id', Message.GetMessageByReceiverId)

module.exports = router;