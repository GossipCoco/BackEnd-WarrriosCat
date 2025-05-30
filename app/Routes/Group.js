const express = require('express')
const Group = require('../controllers/group')
const router = express.Router()

router
.get('/', Group.GetAllGroups)

module.exports = router