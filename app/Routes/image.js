const express = require("express");
const Image = require("../controllers/images");
const upload = require('../middleware/UploadGeneric')('/images/avatars/');
const router = express.Router();

router
  .get('/:model', Image.GetAll)
  .put("/upload/:id", Image.Upload)
  .post('/UploadAvatar/:id', upload.single('image'), Image.UploadAvatar);
  // .put("/uploadAvatar/:id", Image.UploadAvatar)
module.exports = router;
