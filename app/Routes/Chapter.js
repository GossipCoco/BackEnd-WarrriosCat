const express = require('express');

const Chapter = require('../controllers/chapter');

 // Assume this is your multer config
const createUploadMiddleware = require('../middleware/UploadGeneric');
const router = express.Router();

router
.get('/GetFiveLastChapByUser/:id', Chapter.GetFiveLastChapByUser)
.get('/GetAChapterById/:id', Chapter.GetAChapterById)
.get('/GetAChapterByName/:id', Chapter.GetAChapterByName)
.post('/GetLastChapterOfAFiction/:id', Chapter.GetLastChapterOfAFiction)
.post('/CreateAChapitre/:id', createUploadMiddleware('Fictions/').single('image'), Chapter.CreateANewChapter)
.post('/EditChapter/:id', Chapter.EditChapter)

module.exports = router;