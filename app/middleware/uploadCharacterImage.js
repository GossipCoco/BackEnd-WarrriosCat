const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1920 * 1920;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const __dirname =
      "C:\\Users\\gossi\\OneDrive\\Documents\\project\\Project-Warriors\\front-app-v3\\public\\images\\";
    console.log("__basedir : ", __dirname);
    cb(null, __dirname + "Characters/");
  },
  // Gestion des erreurs
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
      return cb(new Error("Le fichier doit etre un JPG ou JPEG ou PNG ou un Webp"));
    }
    cb(undefined, true);
  },
  filename: (req, file, cb) => {
    console.log(file);
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

let uploadImgCharacter = multer({    
fileFilter: fileFilter,
storage: storage,
limits: { fileSize: maxSize },
})

module.exports = uploadImgCharacter;