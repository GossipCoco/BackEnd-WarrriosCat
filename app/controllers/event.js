const query = require("../Queries/EventQueries");
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Event = {};

Event.GetAllEvents = (req, res) => {
  const nav = req.body
  handleResponse(res, query.GetAllEvents(nav))  
};
Event.GetPointParId = (req, res ) => {
  handleResponse(res, query.GetPointParId(req.params.id, req.body))
  }
module.exports = Event