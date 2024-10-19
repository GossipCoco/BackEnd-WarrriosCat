const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');


const CreateANewGame = async (UserId, data, imagePath) => {
    console.log("**** CreateANewGame ****", UserId, data, imagePath);
    const date = new Date().toISOString();
    const gameId = uuidv4();
    const FictionId = uuidv4();
    const NewImagePath = '/images/Fictions/' + imagePath;
  
    try {
      // Crée un nouveau jeu
      const requestNewGame = {
        Id: gameId,
        DateCreation: date,
        TypeGameId: 'Fiction'
      };
      await model.Game.create(requestNewGame);
  
      // Crée une nouvelle fiction
      const requestNewFiction = {
        Id: FictionId,
        Title: data.Title,
        Summary: data.Summary,
        Image: NewImagePath,
        GameId: gameId,
        DateCreation: date,
        UserId: UserId
      };
      await model.Fiction.create(requestNewFiction);
  
      // Associe le jeu à l'utilisateur
      const requestUserGame = {
        Id: uuidv4(),
        GameId: gameId,
        UserId: UserId
      };
      await model.UserGame.create(requestUserGame);
  
      // Vérifie si l'illustration existe déjà
      const existingIllustration = await model.Illustration.findOne({
        where: { Id: NewImagePath }
      });
  
      let illustrationId;
  
      if (!existingIllustration) {
        // Crée une nouvelle illustration seulement si elle n'existe pas déjà
        const requestIllustration = {
          Id: NewImagePath,  // Utilise le chemin de l'image comme clé primaire
          DateCreation: date
        };
        const newIllustration = await model.Illustration.create(requestIllustration);
        illustrationId = newIllustration.Id;
      } else {
        // Si l'illustration existe déjà, récupère son ID
        illustrationId = existingIllustration.Id;
      }
  
      // Lier la fiction à l'illustration
      const requestFictionIllustration = {
        Id: uuidv4(),
        FictionId: FictionId,
        IllustrationId: illustrationId  // Utilise l'ID de l'illustration
      };
      await model.FictionIllustration.create(requestFictionIllustration);
  
      // Associe le premier personnage au jeu
      const RequestCharacterFirst = {
        Id: uuidv4(),
        GameId: gameId,
        CharacterId: data.FirstCharacterId
      };
      await model.GameCharacter.create(RequestCharacterFirst);
  
      // Associe le second personnage au jeu
      const RequestCharacterSecond = {
        Id: uuidv4(),
        GameId: gameId,
        CharacterId: data.SecondCharacterId
      };
      await model.GameCharacter.create(RequestCharacterSecond);
      const RequestOriginalCharacterFirst = {
        Id: uuidv4(),
        GameId: gameId,
        CharacterId: data.OriginalFirstCharacterId
      };
      await model.GameGamer.create(RequestOriginalCharacterFirst);
  
      // Associe le second personnage au jeu
      const RequestOriginalCharacterSecond = {
        Id: uuidv4(),
        GameId: gameId,
        CharacterId: data.OriginalSecondCharacterId
      };
      await model.GameCharacter.create(RequestOriginalCharacterSecond);
  
      // Une fois toutes les opérations terminées, redirige l'utilisateur
      console.log('Redirection après création de la fiction');
      return { success: true }; // Tu peux ici déclencher une redirection dans ton frontend
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };
  module.exports = {
    CreateANewGame    
}