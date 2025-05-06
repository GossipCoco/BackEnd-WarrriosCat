const query = require('../Queries/CharacterQueries')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Character = {}
Character.countAllCharacters = (req, res) => {
    handleResponse(res, query.countAllCharacters())
}
Character.CountCharacterByNameSearch = (req, res) => {
    handleResponse(res, query.CountCharacterByNameSearch(req.params.id))
}
Character.CountNbOriginaleCharacterByUser = (req, res) => {
    handleResponse(res, query.CountNbOriginaleCharacterByUser(req.params.id))
}
Character.CountNbCharactersByClan = (req, res) => {
    handleResponse(res, query.CountNbCharactersByClan(req.params.id))
}
Character.GetAllCharacters = (req, res) => {
    handleResponse(res, query.GetAllCharacters(req.body.nav))
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
Character.GetOriginaleCharacterByUser = (req, res) => {
    const id = req.params.id
    const data = req.body
    handleResponse(res, query.GetOriginaleCharacterByUser(id, data))
}
Character.GetAllNamesAndIdsOriginaCharacters = (req, res) => {
    console.log("GetAllNamesAndIdsOriginaCharacters", req.params.id)
    handleResponse(res, query.GetAllNamesAndIdsOriginaCharacters(req.params.id))
}
Character.CreateANewCharacter = (req, res) => {
    const data = req.body;
    const imageFile = req.file;
    if (imageFile) {
        data.Image = imageFile.filename;
    }
    handleResponse(res, query.CreateANewCharacter(data))
}
Character.GetAllNamesAndIdsCharacters = (req, res) => {
    handleResponse(res, query.GetAllNamesAndIdsCharacters())
}
Character.GetAllCharactersByUser = (req, res) => {
    handleResponse(res, query.GetAllCharactersByUser(req.params.id))
}
Character.GetAllNamesOfAllCharacters = (req, res) => {
    handleResponse(res, query.GetAllNamesOfAllCharacters())
}
Character.GetOneOriginaleCharacterByName = (req, res) => {
    handleResponse(res, query.GetOneOriginaleCharacterByName(req.params.id))
}
Character.CreateAnOriginalCharacter = (req, res) => {
    console.log("CreateAnOriginalCharacter")
    const usr = req.params.id
    const data = {...req.body}
    const imageFile = req.file ? req.file.filename : null;
    if (imageFile) {
        data.Image = imageFile;
      }
    handleResponse(res, query.CreateAnOriginalCharacter(usr, data, imageFile ))
}
Character.EditOriginalCharacter = (req, res) => {
    handleResponse(res, query.EditOriginalCharacter(req.params.id, req.body))
}
Character.GetAllCharactersByNameGradeAndClan = (req, res) => {
    handleResponse(res, query.GetAllCharactersByNameGradeAndClan(req.body))
}
module.exports = Character