const Group = {};
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const query = require('../Queries/GroupQueries')

Group.GetAllGroups = (req, res) => {
    handleResponse(res, query.GetAllGroups())
}
Group.GetAllGroupsWithAllUsers = (req, res) => {
    handleResponse(res, query.GetAllGroupsWithAllUsers())
}

module.exports = Group