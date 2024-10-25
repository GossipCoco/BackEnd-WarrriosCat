const express = require('express');
const Fiction = require('../controllers/fiction');
const upload = require('../middleware/UploadGeneric')('/images/fictions'); // Chemin correct ici
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
   .post('/UploadFictionBackgroundIllustration/:id', upload.single('image'), Fiction.UploadFictionBackgroundIllustration)
   .post('/UpdateFictionIllustration/:id', upload.single('image'), Fiction.UpdateFictionIllustration)
   

module.exports = router;