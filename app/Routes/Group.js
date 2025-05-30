const express = require('express')
const Group = require('../controllers/group')
const router = express.Router()

router
.get('/', Group.GetAllGroups)
.get('/GetAllGroupsWithAllUsers', Group.GetAllGroupsWithAllUsers)

module.exports = router