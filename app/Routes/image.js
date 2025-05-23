const express = require("express");
const Image = require("../controllers/images");
const upload = require('../middleware/UploadGeneric')('/images/avatars/');
const router = express.Router();

router
  .get('/', Image.GetAllImagesTable)
  .get('/GetAllIllustrations', Image.GetAllIllustrations)
  .get('/GetAllBackground', Image.GetAllBackground)
  .put("/upload/:id", Image.Upload)
  .post('/UploadAvatar/:id', upload.single('image'), Image.UploadAvatar)
module.exports = router;
