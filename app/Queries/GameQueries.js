const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const countAllMyGames = (usr) => {
  console.log("countAllMyGames", usr);
  const promises = []
  const request = model.Game.findAndCountAll({
    include: [
      {
        model: model.Fiction,
        where: {
          UserId:  { [model.Utils.Op.like]: `%${usr}%` },
        },
      },
    ]
  });
  promises.push(request)
  return functions.countFuntion(request)
};

const countAllGames = () => {
  console.log("countAllGames");
  const promises = []
  const request = model.Game.findAndCountAll({});
  promises.push(request)
  return functions.countFuntion(request)
};
const GetAllGames = (nav) => {
  console.log("**** All Games ****", nav, nav.step * nav.current, nav.step);
  return model.Game.findAll({
    offset: nav.step * nav.current,
    limit: nav.step,
    where: {
      TypeGameId: 'Fiction',
    },
    include: [
      {
        model: model.Fiction,
        order: [["Title", "ASC"]],
        include: [{
          model: model.Chapter
        }],
        include: [{ model: model.FictionIllustration}]
      }]
  })
};

const GetAllGamesByUser = (user, nav) => {
  console.log("**** All Games By User****", user, nav);
  return model.Game.findAll({
    offset: nav.step * nav.current,
    limit: nav.step,
    include: [  
      {
        model: model.Fiction,
        where: {
          UserId: { [model.Utils.Op.like]: `%${user}%` },
        },        
        include: [{ model: model.Chapter }],
        include: [{ model: model.FictionIllustration}]
      },
    ],
  });
};

const GetAllLastFiveGames = (nav) => {
  console.log("**** GetAllLastFiveGames **** nav : ", nav.step);
  return model.Fiction.findAll({
    offset: nav.step,
    limit: nav.step,
    attributes: ['Id', 'Title', 'Summary', 'Image'],
    order: [["DateCreation", "DESC"]],
  })
};
const GetAllGamesByCharacter = (character, nav) => {  
  console.log("**** GetAllGamesByCharacter ****", character, nav);
  return model.Game.findAll({
    offset: nav.step,
    limit: nav.step,
    include: [
      { model: model.GameCharacter,
        where: {
          CharacterId: { [model.Utils.Op.like]: `%${character}%` },
        },
      },{
        model: model.Fiction,
        order: [["Title", "ASC"]],
        include: [{
          model: model.Chapter
        }],
        include: [{ model: model.FictionIllustration}]
      }]
  })
}
const GetFiveLastGameByUser = (usr) => {
  console.log("**** GetFiveLastGameByUser ****", usr);
    return model.Fiction.findAll({
      limit: 4,
      attributes: ['Id', 'Title', 'Summary', 'Image'],
      order: [['DateCreation', 'DESC']],
      where: {
        UserId: { [model.Utils.Op.like]: `%${usr}%` },
      },
    })
}
const AddANewCharacterToGameAndFiction = (Id, data) => {
  console.log("**** AddANewCharacterToGameAndFiction ****", Id, data);
  const promises = []
  const requestFirstGameCharacter = {
    Id: Id + ' - ' + data.CharacterId,
    GameId: Id,
    CharacterId: data.CharacterId
  }
  console.log(requestFirstGameCharacter)
  const request = model.GameCharacter.create(requestFirstGameCharacter)
  promises.push(request)
  return request
    .then((w) => {
      console.log(w)
      return Promise.all(promises);
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}
const AddANewOriginalCharacter = (Id, data) => {
  console.log("**** AddANewOriginalCharacter ****", Id, data);
  const promises = []
  const requestFirstGameCharacter = {
    Id: Id + ' - ' + data.CharacterId,
    GameId: Id,
    GamerId: data.CharacterId
  }
  console.log(requestFirstGameCharacter)
  const request =  model.GameGamer.create(requestFirstGameCharacter)
  return request
  .then((w) => {
    console.log(w)
    return Promise.all(promises);
  })
  .catch((err) => {
    console.log(err);
    return Promise.reject(err);
  });

}
module.exports = {
  countAllMyGames,
  countAllGames,
  GetAllGames,
  GetAllLastFiveGames,
  GetAllGamesByUser,
  GetFiveLastGameByUser,
  GetAllGamesByCharacter,
  AddANewCharacterToGameAndFiction,
  AddANewOriginalCharacter,
}