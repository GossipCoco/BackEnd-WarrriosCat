const express = require("express");
const Image = require("../controllers/images");

const router = express.Router();

router
  .get('/:model', Image.GetAll)
module.exports = router;
