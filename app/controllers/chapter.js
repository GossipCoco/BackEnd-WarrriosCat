const query = require('../Queries/ChapterQueries')

const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Chapter = {}
Chapter.GetAChapterById = async (req, res) => {
  console.log("********* GetAChapterById ************", req.params.id)
  handleResponse(res, query.GetAChapterById(req.params.id))
}
Chapter.GetAChapterByName = async (req, res) => {
  console.log("********* GetAChapterByName ************", req.params.id)
  handleResponse(res, query.GetAChapterByName(req.params.id));
};
Chapter.GetLastChapterOfAFiction = async (req, res) => {
  handleResponse(res, query.GetLastChapterOfAFiction(req.params.id));
};  
Chapter.GetFiveLastChapByUser = async (req, res) => {
  handleResponse(res, query.GetFiveLastChapByUser(req.params.id));
};  
Chapter.CreateANewChapter = async (req, res) => {
  console.log(req.file)
  handleResponse(res, query.CreateANewChapter(req.params.id, req.body, req.file.originalname));
};
Chapter.EditChapter = async (req, res) => {
  handleResponse(res, query.EditChapter(req.params.id, req.body))
}
Chapter.GetAllChaptersByFiction = async (req, res) => {
  handleResponse(res, query.GetAllChaptersByFiction(req.params.id))
}
module.exports = Chapter