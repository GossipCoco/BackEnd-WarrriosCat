const model = require('../Models/GameModel');
const query = require("../Queries/GameQueries");
const queries = require('../Queries/CreationUpdateGameQueries')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const Game = {}
Game.GetAllGames = (req, res) => {
  handleResponse(res, query.GetAllGames(req.body))    
}
Game.GetAllGamesByUser = (req, res) => {
  handleResponse(res, query.GetAllGamesByUser(req.params.id,  req.body))
}
Game.countAllMyGames = (req, res) => {
  handleResponse(res, query.countAllMyGames(req.params.id)) 
}
Game.countAllGames = (req, res) => {
  handleResponse(res, query.countAllGames())
}
Game.CreateANewGame = (req, res) => {
  console.log("CreateANewGame", req.file)
  const UserId = req.params.id;
  const imagePath = req.file ? req.file.filename : null; // Get the path of the uploaded image if present
  // Destructure additional data if needed
  const { Title, Summary, FirstCharacterId, SecondCharacterId, LocationId } = req.body;
  // Check if the necessary fields are provided
  if (!Title || !Summary || !FirstCharacterId || !SecondCharacterId) {
    return res.status(400).send({ message: "All fields are required" });
  }
  const data = { Title, Summary, FirstCharacterId, SecondCharacterId, LocationId };
  handleResponse(res, queries.CreateANewGame(UserId, data, imagePath))

  }
Game.GetFiveLastGameByUser = (req, res) => {  
  handleResponse(res, query.GetFiveLastGameByUser(req.params.id))
}
Game.GetAllLastFiveGames = (req, res) => {
  handleResponse(res, query.GetAllLastFiveGames(req.body))
}
Game.GetAllGamesByCharacter = (req, res) => {
  const id = req.params.id
  const data = req.body
  handleResponse(res, query.GetAllGamesByCharacter(id, data))  
}
Game.AddANewCharacterToGameAndFiction = (req, res) => {
  handleResponse(res, query.AddANewCharacterToGameAndFiction(req.params.id, req.body))  
}
module.exports = Game