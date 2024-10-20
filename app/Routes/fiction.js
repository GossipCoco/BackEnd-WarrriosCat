const express = require('express');
const Fiction = require('../controllers/fiction');
const createUploadMiddleware = require('../middleware/UploadGeneric'); 
const router = express.Router();

router
   .get('/CountAllFictionsOnBases', Fiction.countAllFictionsOnBases)
   .get('/CountAllMyFictions/:id', Fiction.countAllMyFictions)
   .get('/CountTotalWordBuUserV2/:id', Fiction.CountTotalWordBuUserV2)
   .post('/GetAllFictionsByUserId/:id', Fiction.GetAllFictionsByUser)
   .post('/GetAllFictionsOfALlUsers', Fiction.GetAllFictionsOnBase)
   .post('/CountTotalWordBuUser/:id', Fiction.CountTotalWordBuUser)  
   .post('/GetAllCommentsByFiction/:id', Fiction.GetAllCommentsByFiction) 
   .post('/GetAllFictionsByName/:id', Fiction.GetAllFictionsByName)  
   .post('/CreateCommentForAFiction/:id', Fiction.CreateCommentForAFiction)
   .post('/UpdateFictionIllustration/:id',  createUploadMiddleware('Fictions/').single('image'), Fiction.UpdateFictionIllustration)
   

module.exports = router;