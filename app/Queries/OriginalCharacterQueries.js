const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')
const { Op } = require("sequelize");

const GetAllNamesOfAllCharacters = async () => {
  console.log("GetAllNamesOfAllCharacters");
  const characterNames = await model.Character.findAll({
    attributes: [
      ['Id', 'Id'],
      ['CurrentName', 'Name'],
    ],
    raw: true,
  });
  const gamerNames = await model.Gamer.findAll({
    attributes: [
      ['Id', 'Id'],
      ['UserName', 'Name'],
    ],
    raw: true,
  });
  const combinedNames = [...characterNames, ...gamerNames];
  combinedNames.sort((a, b) => a.Name.localeCompare(b.Name));
  return combinedNames;
}

const GetAllNamesAndIdsOriginaCharacters = (usr) => {
    console.log("GetAllNamesAndIdsOriginaCharacters", usr)
    return model.Gamer.findAll({
      where: { UserId: usr },
      attributes: ['Id', 'CurrentName'],
      order: [["CurrentName", "ASC"]]
    }) 
}
const GetOriginaleCharacterByUser = (usr, nav) => {  
  console.log("GetOriginaleCharacterByUser", usr, nav);
  return model.Gamer.findAll({
    where: { UserId: usr }, 
    offset: nav.step * nav.current,
    limit: nav.step,
    order: [["CurrentName", "ASC"]],
  })
}
const GetOriginalCharacterByName = (id, nav) => {
  console.log("GetOriginalCharacterByName", id, nav);
  return model.Gamer.findAll({
     where: { CurrentName: {
        [Op.like]: `%${id}%`  // <-- la vraie recherche partielle
      } },
    offset: nav.step * nav.current,
    limit: nav.step,
    order: [["CurrentName", "ASC"]],
  })
}
const GetOneOriginaleCharacterByName = (Name) => {  
  console.log("GetOneOriginaleCharacterByUser", Name);
  return model.Gamer.findOne({
    where: { CurrentName: Name }, 
    include:[{
      model: model.Clan
    },
   {
    model: model.Grade
   }]
  })
}

const CreateAnOriginalCharacter = (usr, data, imagePath) => {
  console.log("******CreateAnOriginalCharacter******", usr, data, imagePath);
  const date = new Date().toISOString();
  const Id = uuidv4();
  const Image = '/images/Gamer/' + imagePath;

  const newOriginaleCharacter = {
    Id: Id,
    createdAt: date,
    updatedAt: date,
    UserId: usr,
    CurrentName: data.UserName,
    Image: Image,
    Description: data.Description,
    Biography: data.Biography, // ici attention ! tu avais mis data.Description
    ClanId: data.ClanId,
    Status: data.Status,
    Genre: data.Genre,
    GradeId: data.GradeId,
    Personnality: data.Personnality,
    KitName: data.KitName,
    ApprenticeName: data.ApprenticeName,
    WarriorName: data.WarriorName
  };

  // Retourne directement la promesse
  return model.Gamer.create(newOriginaleCharacter);
}

// -------- EDIT ----------

const EditOriginalCharacter = (id, data) => {
  console.log("******CreateAnOriginalCharacter******",id, data);
  const promises = []
  const field = data.typeField
  if(field === 'Description'){
    const request = model.Gamer.update({Description: data.Description}, { where: { CurrentName: { [model.Utils.Op.like]: `%${id}%` } } })
    return ReturnPromise(promises, request)
  }else if(field === 'Biography'){
    const request = model.Gamer.update({Biography: data.Biography}, { where: { CurrentName: { [model.Utils.Op.like]: `%${id}%` } } })
    return ReturnPromise(promises, request)
  }else if(field === 'Personnality'){
    const request = model.Gamer.update({Personnality: data.Personnality}, { where: { CurrentName: { [model.Utils.Op.like]: `%${id}%` } } })
    return ReturnPromise(promises, request)
  }
}
const ReturnPromise = (promise, request) => {
  promise.push(request)
  return request
  .then((response) => {
    return Promise.all(promise);
  })
  .catch((err) => {
    console.log(err);
    return Promise.reject(err);
  })
}
 module.exports = {
    GetAllNamesOfAllCharacters,
    GetAllNamesAndIdsOriginaCharacters,
    GetOriginaleCharacterByUser,
    GetOriginalCharacterByName,
    GetOneOriginaleCharacterByName,
    CreateAnOriginalCharacter,
    EditOriginalCharacter
 }