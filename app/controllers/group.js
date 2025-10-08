const Group = {};
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const query = require('../Queries/GroupQueries')

Group.GetAllGroups = (req, res) => {
    handleResponse(res, query.GetAllGroups(req.body))
}
Group.GetAllGroupsWithAllUsers = (req, res) => {
    handleResponse(res, query.GetAllGroupsWithAllUsers())
}
Group.GetAGroupById = (req, res) => {
    const id = req.params.id;
    handleResponse(res, query.GetAGroupById(id))
}

module.exports = Group