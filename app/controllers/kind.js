const query = require('../Queries/KindQueries')
const { handleResponse } = require("../Functions/handleResponse"); 

const Kind = {}

Kind.GetAllKinds = (req, res) => {
    handleResponse(res, query.GetAllKinds())
}
module.exports = Kind