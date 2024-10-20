const query = require('../Queries/CharacterQueries')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Character = {}
Character.countAllCharacters = (req, res) => {
    handleResponse(res, query.countAllCharacters())
}
Character.CountNbOriginaleCharacterByUser = (req, res) => {
    handleResponse(res, query.CountNbOriginaleCharacterByUser(req.params.id))
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
    handleResponse(res, query.GetCharacterByNameSearch(id))
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
    const imageFile = req.files[0].filename;
    handleResponse(res, query.CreateAnOriginalCharacter(usr, data, imageFile ))
}
module.exports = Character