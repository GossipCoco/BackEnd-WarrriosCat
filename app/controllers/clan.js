const query = require("../Queries/LocationQueries");
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Clan = {};

Clan.countAllClans = async (req, res) => {
  console.log("******* countAllClans ********");
  handleResponse(res, query.countAllClans())
}
Clan.countAllLocations = async (req, res) => {
  handleResponse(res, query.countAllLocations())
}
Clan.GetAllClans = (req, res) => {
  handleResponse(res, query.GetAllClans(req.body))  
};
Clan.GetClanById = (req, res) => {
  const id = req.params.id
  handleResponse(res, query.GetClanById(id))
}
Clan.GetClanByNameClan = (req, res) => {
  const id = req.params.name
  handleResponse(res, query.GetClanByNameClan(id)) 
}
Clan.GetAllLocations = (req, res) => {
  handleResponse(res, query.GetAllLocations(req.body)) 
}
Clan.GetLocationById = (req, res) => {
  const id = req.params.id
  handleResponse(res, query.GetLocationById(id)) 
}
Clan.GetAllClanForSelect = (req, res) => {
  handleResponse(res, query.GetAllClanForSelect())
}
module.exports = Clan