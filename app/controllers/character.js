const query = require('../Queries/CharacterQueries')
const count = require('../Queries/CharacterCounter')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Character = {}

Character.countAllCharacters = (req, res) => {
    handleResponse(res, count.countAllCharacters())
}
Character.CountCharacterByNameSearch = (req, res) => {
    handleResponse(res, count.CountCharacterByNameSearch(req.params.id))
}
Character.CountNbOriginaleCharacterByUser = (req, res) => {
    handleResponse(res, count.CountNbOriginaleCharacterByUser(req.params.id))
}
Character.CountNbCharactersByClan = (req, res) => {
    handleResponse(res, count.CountNbCharactersByClan(req.params.id))
}
Character.CountCharacterByGrade = (req, res) => {
    handleResponse(res, count.CountCharacterByGrade(req.params.id))
}
Character.CountNbOriginaleCharacterByName = (req, res) => {
    handleResponse(res, count.CountNbOriginaleCharacterByName(req.params.id))
}
/* GET */
Character.GetAllCharacters = (req, res) => {
    handleResponse(res, query.GetAllCharacters(req.body.nav))
}
Character.GetAllCharactersByClan = (req, res) => {
    handleResponse(res, query.GetAllCharactersByClan(req.params.id, req.body))
}
Character.GetAllCharactersByGrade = (req, res) => {
    handleResponse(res, query.GetAllCharactersByGrade(req.params.id, req.body))
}
Character.GetAllCharactersDashboard = (req, res) => {
    handleResponse(res, query.GetAllCharactersDashboard(req.body.nav))
}
Character.GetCharacterByName = (req, res) => {
    const id = req.params.id
    handleResponse(res, query.GetCharacterByName(id))
}
Character.GetCharacterByNameSearch = (req, res) => {
    const id = req.params.name
    handleResponse(res, query.GetCharacterByNameSearch(id, req.body))
}
Character.GetAllCharactersByNameGradeAndClan = (req, res) => {
    handleResponse(res, query.GetAllCharactersByNameGradeAndClan(req.body))
}
Character.GetAllNamesAndIdsCharacters = (req, res) => {
    handleResponse(res, query.GetAllNamesAndIdsCharacters())
}
Character.GetAllCharactersByUser = (req, res) => {
    handleResponse(res, query.GetAllCharactersByUser(req.params.id))
}
Character.CreateANewCharacter = (req, res) => {
    const data = req.body;
    const imageFile = req.file;
    if (imageFile) {
        data.Image = imageFile.filename;
    }
    handleResponse(res, query.CreateANewCharacter(data))
}
Character.GetOriginaleCharacterByUser = (req, res) => {
    const id = req.params.id
    const data = req.body
    handleResponse(res, originalCharacterQuery.GetOriginaleCharacterByUser(id, data))
}
Character.GetOriginalCharacterByName = (req, res) => {
    handleResponse(res, originalCharacterQuery.GetOriginalCharacterByName(req.params.id, req.body))
}
Character.GetAllNamesAndIdsOriginaCharacters = (req, res) => {
    handleResponse(res, originalCharacterQuery.GetAllNamesAndIdsOriginaCharacters(req.params.id))
}
Character.GetAllNamesOfAllCharacters = (req, res) => {
    handleResponse(res, originalCharacterQuery.GetAllNamesOfAllCharacters())
}
Character.GetOneOriginaleCharacterByName = (req, res) => {
    handleResponse(res, originalCharacterQuery.GetOneOriginaleCharacterByName(req.params.id))
}
Character.CreateAnOriginalCharacter = (req, res) => {
    const usr = req.params.id
    const data = {...req.body}
    const imageFile = req.file ? req.file.filename : null;
    if (imageFile) {
        data.Image = imageFile;
      }
    handleResponse(res, originalCharacterQuery.CreateAnOriginalCharacter(usr, data, imageFile ))
}
Character.EditOriginalCharacter = (req, res) => {
    handleResponse(res, originalCharacterQuery.EditOriginalCharacter(req.params.id, req.body))
}
module.exports = Character