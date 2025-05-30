const util = require("util");
const multer = require("multer");
const maxSize = 2 * 3550 * 3550;
const fs = require('fs');
const path = require('path');
const config = require('../config/db.config');

const createUploadMiddleware = (uploadDir) => {

  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const __dirname = config.__dirname;
      const destinationPath = path.join(__dirname, uploadDir);
      if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath, { recursive: true });
      }
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('Le fichier doit être un JPG, JPEG ou PNG.'));
      }
      cb(null, destinationPath);
    },

    filename: (req, file, cb) => {
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

  return multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: maxSize },
  })
};

module.exports = createUploadMiddleware;
