const express = require('express')

const Clan = require('../controllers/clan')

const router = express.Router()

router
.get('/countAllClans', Clan.countAllClans)
.get('/countAllLocations', Clan.countAllLocations)
.post('/GetAllLocations', Clan.GetAllLocations)
.post('/', Clan.GetAllClans)
.get('/:id', Clan.GetClanById)
.get('/search/:name', Clan.GetClanById)
.post('/Location/GetAllLocations', Clan.GetAllLocations)
.get('/Location/:id', Clan.GetLocationById)


module.exports = router