const util = require("util");
const multer = require("multer");
const maxSize = 2 * 3550 * 3550;
const fs = require('fs');
const path = require('path');

const createUploadMiddleware = (uploadDir) => {

  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const __dirname = 'C:\\Users\\gossi\\OneDrive\\Documents\\project\\Project-Warriors\\front-app-v3\\public\\images\\';
      const destinationPath = path.join(__dirname, uploadDir);
      if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath, { recursive: true });
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
