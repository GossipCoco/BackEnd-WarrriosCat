const query = require("../Queries/LocationQueries");
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Clan = {};

Clan.GetAllClans = (req, res) => {
  handleResponse(res, query.GetAllClans())  
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
  handleResponse(res, query.GetAllLocations()) 
}
Clan.GetLocationById = (req, res) => {
  const id = req.params.id
  handleResponse(res, query.GetLocationById(id)) 
}
module.exports = Clan