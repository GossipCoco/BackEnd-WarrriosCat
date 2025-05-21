const express = require('express')

const Clan = require('../controllers/clan')

const router = express.Router()

router
.post('/', Clan.GetAllClans)
.get('/:id', Clan.GetClanById)
.get('/countAllClans', Clan.countAllClans)
.get('/countAllLocations', Clan.countAllLocations)
.post('/GetAllLocations', Clan.GetAllLocations)
.get('/GetAllClanForSelect', Clan.GetAllClanForSelect)
.get('/search/:name', Clan.GetClanById)
.post('/Location/GetAllLocations', Clan.GetAllLocations)
.get('/Location/:id', Clan.GetLocationById)


module.exports = router