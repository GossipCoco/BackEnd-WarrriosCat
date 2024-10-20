const express = require('express');

const Game = require('../controllers/Game');

 // Assume this is your multer config
 const createUploadMiddleware = require('../middleware/UploadGeneric'); 
const router = express.Router();

router
   .post('/', Game.GetAllGames)
   .get('/countAllGames', Game.countAllGames)
   .put('/:id', Game.GetAllGamesByUser)
   .post('/createANewGame/:id', createUploadMiddleware('Fictions/').single('image'), Game.CreateANewGame)
   .get('/countAllMyGames/:id', Game.countAllMyGames)
   .get('/GetFiveLastGameByUser/:id', Game.GetFiveLastGameByUser)
   .post('/GetAllLastFiveGames', Game.GetAllLastFiveGames)
   .post('/AddANewCharacterToGameAndFiction/:id', Game.AddANewCharacterToGameAndFiction)
   .post('/GetAllGamesByCharacter/:id', Game.GetAllGamesByCharacter)

module.exports = router;