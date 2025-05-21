const queries = require("../Queries/FictionQueries");
const query = require('../Queries/CreationUpdateGameQueries')
const count = require('../Queries/FictionCount')
const update = require('../Queries/FictionUpdate')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Fiction = {}

// Utilisation d'une fonction utilitaire pour gérer les requêtes
Fiction.countAllMyFictions = async (req, res) => {
  handleResponse(res, count.countAllMyFictions(req.params.id));
};
Fiction.countAllFictionsOnBases = async (req, res) => {
  handleResponse(res, count.countAllFictionsOnBases());
};
Fiction.CountTotalWordBuUser = async (req, res) => {
  handleResponse(res, count.CountTotalWordBuUser(req.params.id));
};
Fiction.CountTotalWordBuUserV2 = async (req, res) => {
  handleResponse(res, count.CountTotalWordByUserV2(req.params.id));
};
//--------- GET
Fiction.GetAllFictionsOnBase = async (req, res) => {
  handleResponse(res, queries.GetAllFictionsOnBase(req.body));
};
Fiction.GetAllFictionsByName = async (req, res) => {
  handleResponse(res, queries.GetAllFictionsByName(req.params.id, req.body));
};
Fiction.GetAllCommentsByFiction = async (req, res) => {
  handleResponse(res, queries.GetAllCommentsByFiction(req.params.id, req.body));
};
Fiction.GetAllFictionsByUser = async (req, res) => {
  handleResponse(res, queries.GetAllFictionsByUser(req.params.id, req.body));
};
Fiction.GetAllAUthors = (req, res) => {
  handleResponse(res, queries.GetAllAUthors())
}
// -------- Create
Fiction.CreateCommentForAFiction = async (req, res) => {
  const { Content, UserId, FictionId } = req.body;
  handleResponse(res, queries.CreateCommentForAFiction(req.params.id, { Content, UserId, FictionId }));
};

// -------- Update
Fiction.UpdateRating = async (req, res) => {
  handleResponse(res, update.UpdateRating(req.params.id, req.body));
};
Fiction.EditChapter = async (req, res) => {
  handleResponse(res, update.EditChapter(req.params.id, req.body))
}
Fiction.UpdateFictionIllustration = async (req, res) => {
  const id = req.params.id
  const imagePath = req.file ? req.file.filename : null;
  handleResponse(res, update.UpdateFictionIllustration(id, imagePath))
}
Fiction.UploadFictionBackgroundIllustration = async (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  const imagePath = req.file ? req.file.filename : null;
  handleResponse(res, update.UploadFictionBackgroundIllustration(id, imagePath))
}
module.exports = Fiction;