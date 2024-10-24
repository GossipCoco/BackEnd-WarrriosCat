const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1920 * 1920;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const __dirname =
      "C:\\Users\\gossi\\Documents\\Project\\Project-Warriors\\front-app-v3\\public";
    console.log("__basedir : ", __dirname);
    cb(null, __dirname + "/images/Fictions/");
  },
  // Gestion des erreurs
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
      return cb(new Error("Le fichier doit etre un JPG ou JPEG ou PNG"));
    }
    cb(undefined, true);
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

let uploadFileAvatar = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFileAvatar);
module.exports = uploadFileMiddleware;
