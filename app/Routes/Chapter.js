const express = require('express');

const Chapter = require('../controllers/chapter');

 // Assume this is your multer config
const upload = require('../middleware/UploadGeneric')('/images/fictions'); // Chemin correct ici
const router = express.Router();

router
.get('/GetFiveLastChapByUser/:id', Chapter.GetFiveLastChapByUser)
.get('/GetAChapterById/:id', Chapter.GetAChapterById)
.get('/GetAChapterByName/:id', Chapter.GetAChapterByName)
.get('/GetAllChaptersByFiction/:id', Chapter.GetAllChaptersByFiction)
.post('/GetLastChapterOfAFiction/:id', Chapter.GetLastChapterOfAFiction)
.post('/CreateAChapitre/:id', upload.single('image'), Chapter.CreateANewChapter)
.post('/EditChapter/:id', Chapter.EditChapter)

module.exports = router;