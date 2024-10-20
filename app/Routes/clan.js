const express = require('express')

const Clan = require('../controllers/clan')

const router = express.Router()

router
.get('/GetAllLocations', Clan.GetAllLocations)
.get('/', Clan.GetAllClans)
.get('/:id', Clan.GetClanById)
.get('/search/:name', Clan.GetClanById)
.get('/Location/GetAllLocations', Clan.GetAllLocations)
.get('/Location/:id', Clan.GetLocationById)


module.exports = router