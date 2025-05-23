const query = require('../Queries/ArcBookQueries')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const ArcBook = {}

ArcBook.GetAllArcsWithBooks = (req, res) => {
    handleResponse(res, query.GetAllArcsWithBooks(req.body))
}
ArcBook.GetAllBooks = (req, res) => {
    handleResponse(res, query.GetAllBooks(req.body))
}
ArcBook.GetBookByTitle = (req, res) => {
    handleResponse(res, query.GetBookByTitle(req.params.id))
}
ArcBook.GetLastPublishedBook = (req, res) => {
    handleResponse(res, query.GetLastPublishedBook())
}
ArcBook.GetCurrentArc = (req, res) => {
    console.log("********* GetCurrentArc ******************")
    handleResponse(res, query.GetCurrentArc())
}
ArcBook.GetArcByName = (req, res) => {
    handleResponse(res, query.GetArcByName(req.params.id))
}
module.exports = ArcBook