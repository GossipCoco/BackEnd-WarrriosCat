const express = require('express')
const ArcBook = require('../controllers/arcBook')


const router = express.Router()

router
.get('/GetBookByTitle/:id', ArcBook.GetBookByTitle)
.get('/GetLastPublishedBook', ArcBook.GetLastPublishedBook)
.post('/GetAllBooks', ArcBook.GetAllBooks)
.post('/GetAllArcsWithBooks', ArcBook.GetAllArcsWithBooks)

module.exports = router