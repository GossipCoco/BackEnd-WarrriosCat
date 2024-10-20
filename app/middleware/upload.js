const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1920 * 1920;
const config = require('../../config')

const queries = require('../Queries/UserQueries')

let storage = multer.diskStorage({
  destination: (req, file, cb) => {  
    const __dirname = config.UploadBack.url
    console.log('__basedir : ', __dirname)  
    cb(null, __dirname + "/images/backgroundUser/");
  },
  // Gestion des erreurs
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Le fichier doit etre un JPG ou JPEG ou PNG'))
    }
    cb(undefined, true)
  },
  filename: (req, file, cb) => {
    console.log("filename: ", req.file, file);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;