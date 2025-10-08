const express = require('express')
const Group = require('../controllers/group')
const router = express.Router()

router
.post('/', Group.GetAllGroups)
.get('/CountAllGroups', Group.countAllGroups)
.get('/GetAllGroupsWithAllUsers', Group.GetAllGroupsWithAllUsers)
.post('/GetAGroupById/:id', Group.GetAGroupById)

module.exports = router