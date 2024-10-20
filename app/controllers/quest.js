const Quest = {}
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const query = require("../Queries/QuestQueries");

Quest.GetTotalQuest = (req, res) => {
  handleResponse(res, query.GetTotalQuest())
}

Quest.GetAllQuests = (req, res) => {
  handleResponse(res, query.GetAllQuests(req.body))  
}
Quest.GetQuestById = (req, res) => {
  handleResponse(res, query.GetQuestById(req.params.id))
}
module.exports = Quest