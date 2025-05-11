const express = require('express')
const Character = require('../controllers/character')
const router = express.Router()
 // Assume this is your multer config
 const uploadCharacter = require('../middleware/UploadGeneric')('/images/Characters'); 
 const uploadOriginalCharacter = require('../middleware/UploadGeneric')('/images/Gamer'); 
 
router
.get('/GetAllNamesAndIdsOriginaCharacters/:id', Character.GetAllNamesAndIdsOriginaCharacters)
.get('/GetCharacterByName/:id', Character.GetCharacterByName)
.get('/GetOneOriginaleCharacterByName/:id', Character.GetOneOriginaleCharacterByName)
.get('/countAllcharacters', Character.countAllCharacters)
.get('/CountNbOriginaleCharacterByUser/:id', Character.CountNbOriginaleCharacterByUser)
.get('/CountNbCharactersByClan/:id', Character.CountNbCharactersByClan)
.get('/CountCharacterByNameSearch/:id', Character.CountCharacterByNameSearch)
.get('/GetAllNamesAndIdsCharacters', Character.GetAllNamesAndIdsCharacters)
.get('/GetAllNamesOfAllCharacters', Character.GetAllNamesOfAllCharacters)
.get('/GetAllCharactersByUser/:id', Character.GetAllCharactersByUser)
.post('/GetAllCharactersByClan/:id', Character.GetAllCharactersByClan)
.post('/search/:name', Character.GetCharacterByNameSearch)
.get('/GetAllNamesAndIdsOriginaCharacters/:id', Character.GetAllNamesAndIdsOriginaCharacters)
.post('/GetOriginaleCharacterByUser/:id', Character.GetOriginaleCharacterByUser)
.post('/allcharacters', Character.GetAllCharacters)
.post('/GetAllCharactersDashboard', Character.GetAllCharactersDashboard)
.post('/createANewCharacter', uploadCharacter.single('image'), Character.CreateANewCharacter)
.post('/CreateAnOriginalCharacter/:id',uploadOriginalCharacter.single('image'), Character.CreateAnOriginalCharacter)
.post('/EditOriginalCharacter/:id', Character.EditOriginalCharacter)
.post('/GetAllCharactersByNameGradeAndClan', Character.GetAllCharactersByNameGradeAndClan)

module.exports = router