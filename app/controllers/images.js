const query = require("../Queries/ImageQueries");
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const uploadFile = require("../middleware/upload");

const Image = {};

Image.GetAllImagesTable = (req, res) => {
  const modelName = req.params.model;  // Le nom du modèle est passé en tant que paramètre de la requête
  handleResponse(res, query.GetAllImagesTable(modelName))
};
Image.GetAllIllustrations = (req, res) => {
  handleResponse(res, query.GetAllIllustrations())
}
Image.GetAllBackground = (req, res) =>{
  handleResponse(res, query.GetAllBackground())
}
Image.Upload = async (req, res) => {
  const id = req.params.id;
  console.log("id: ", id);
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    query
      .UploadUserBackground(req.file.originalname, id)
      .then((w) => {
        res.status(200).send({
          message: "Uploaded the file successfully: " + req.file.originalname,
        });
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(500);
      });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
Image.UploadAvatar = async (req, res) => {
  try {
    const userId = req.params.id;
    const imageName = req.file.originalname;
    const result = await query.UploadUserAvatar(imageName, userId);
    res.status(200).json({
      success: true,
      message: "Avatar uploadé et lié à l'utilisateur",
      result
    });
  } catch (err) {
    console.error("Erreur UploadAvatar :", err);
    res.status(500).json({ success: false, message: "Erreur serveur pendant l'upload de l'avatar" });
  }
};
module.exports = Image;
