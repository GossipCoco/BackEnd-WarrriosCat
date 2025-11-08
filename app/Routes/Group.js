const express = require('express')
const Group = require('../controllers/group')
const router = express.Router()

router
.post('/', Group.GetAllGroups)
.get('/CountAllGroups', Group.CountAllGroups)
.get('/GetAllGroupsWithAllUsers', Group.GetAllGroupsWithAllUsers)
.get('/GetGroupByPostId/:id', Group.GetGroupByPostId)
.post('/GetAGroupById/:id', Group.GetAGroupById)

module.exports = router