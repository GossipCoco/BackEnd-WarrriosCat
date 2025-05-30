const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1920 * 1920;
const config = require('../config/db.config');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {  
    const __dirname = config.__dirname    
    console.log('__basedir : ', __dirname)  
    cb(null, __dirname + "/images/Gamer/");
  },
  // Gestion des erreurs
  filename: (req, file, cb) => {
    // console.log(file);    
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload only images.'), false);
    }
  };

let uploadImgOriginaleCharacter = multer({    
  fileFilter: fileFilter,
  storage: storage,
  limits: { fileSize: maxSize },
})

module.exports = uploadImgOriginaleCharacter;