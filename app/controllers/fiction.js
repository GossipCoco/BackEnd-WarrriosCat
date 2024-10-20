const queries = require("../Queries/FictionQueries");
const query = require('../Queries/CreationUpdateGameQueries')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Fiction = {}

// Utilisation d'une fonction utilitaire pour gérer les requêtes
Fiction.countAllMyFictions = async (req, res) => {
  handleResponse(res, queries.countAllMyFictions(req.params.id));
};

Fiction.countAllFictionsOnBases = async (req, res) => {
  handleResponse(res, queries.countAllFictionsOnBases());
};

Fiction.CountTotalWordBuUser = async (req, res) => {
  handleResponse(res, queries.CountTotalWordBuUser(req.params.id));
};

Fiction.CountTotalWordBuUserV2 = async (req, res) => {
  handleResponse(res, queries.CountTotalWordByUserV2(req.params.id));
};

Fiction.GetAllFictionsOnBase = async (req, res) => {
  handleResponse(res, queries.GetAllFictionsOnBase(req.body));
};

Fiction.GetAllFictionsByName = async (req, res) => {
  handleResponse(res, queries.GetAllFictionsByName(req.params.id, req.body));
};

Fiction.GetAChapterByName = async (req, res) => {
  handleResponse(res, queries.GetAChapterByName(req.params.id, req.body));
};

Fiction.GetLastChapterOfAFiction = async (req, res) => {
  handleResponse(res, queries.GetLastChapterOfAFiction(req.params.id));
};

Fiction.GetFiveLastChapByUser = async (req, res) => {
  handleResponse(res, queries.GetFiveLastChapByUser(req.params.id));
};

Fiction.CreateANewChapter = async (req, res) => {
  handleResponse(res, queries.CreateANewChapter(req.params.id, req.body, req.file.filename));
};

Fiction.AddRating = async (req, res) => {

  handleResponse(res, queries.AddRating(req.params.id, req.body));
};

Fiction.CreateCommentForAFiction = async (req, res) => {
  const { Content, UserId, FictionId } = req.body;
  handleResponse(res, queries.CreateCommentForAFiction(req.params.id, { Content, UserId, FictionId }));
};

Fiction.GetAllCommentsByFiction = async (req, res) => {
  handleResponse(res, queries.GetAllCommentsByFiction(req.params.id, req.body));
};

Fiction.GetAllFictionsByUser = async (req, res) => {
  handleResponse(res, queries.GetAllFictionsByUser(req.params.id, req.body));
};
Fiction.EditChapter = async (req, res) => {
  handleResponse(res, queries.EditChapter(req.params.id, req.body))
}
Fiction.UpdateFictionIllustration = async (req, res) => {
  const id = req.params.id
  const imagePath = req.file ? req.file.filename : null;
  handleResponse(res, queries.UpdateFictionIllustration(id, imagePath))

}
module.exports = Fiction;