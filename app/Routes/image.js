const express = require("express");
const Image = require("../controllers/images");

const router = express.Router();

router
  .get('/:model', Image.GetAll)
  .put("/upload/:id", Image.Upload)
  .put("/uploadAvatar/:id", Image.UploadAvatar)

module.exports = router;
