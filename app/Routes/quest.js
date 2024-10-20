const express = require('express');
const Quest = require('../controllers/quest');

const router = express.Router();

router
    .post('/', Quest.GetAllQuests)
    .get('/GetTotalQuest', Quest.GetTotalQuest)
    .get('/:id', Quest.GetQuestById)



module.exports = router;