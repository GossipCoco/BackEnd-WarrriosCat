const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1920 * 1920;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {  
    const __dirname = 'C:\\Users\\gossi\\OneDrive\\Documents\\project\\Project-Warriors\\front-app-v3\\public'    
    console.log('__basedir : ', __dirname)  
    cb(null, __dirname + "/images/Fictions/");
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

let uploadImgFiction = multer({    
  fileFilter: fileFilter,
  storage: storage,
  limits: { fileSize: maxSize },
})

module.exports = uploadImgFiction;