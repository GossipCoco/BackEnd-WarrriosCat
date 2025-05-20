const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')
const { Op } = require("sequelize");

// -------- GET ----------

const GetAllCharacters = (nav) => {
    console.log("************ GetAllCharacters ************", nav)
    return model.Character.findAll({
      offset: nav.step * nav.current,
      limit: nav.step,
      order: [["CurrentName", "ASC"]],
      attributes:['Id', 'CurrentName', 'Image'],
      include: [
        { model: model.Grade,
          attributes:['Name'] },
        { model: model.Clan,
          attributes:['Id', 'Name', 'Image'] },
        { model: model.Warrior,
          attributes:['Name'] },
      ],
    });
  };
  const GetAllCharactersByClan = (id, nav) => {
    console.log("************ GetAllCharactersByClan ************", id, nav)
    return model.Character.findAll({
      offset: nav.step * nav.current,
      limit: nav.step,
      order: [["CurrentName", "ASC"]],
      attributes: ['Id', 'CurrentName', 'Image'],
      where : { ClanId : id},
      include: [{
        model: model.Clan,
        attributes:['Name', 'Image']
      }]
    })
  }
  const GetAllCharactersByGrade = (id, nav) => {
    console.log("************ GetAllCharactersByGrade ************", id, nav)
    return model.Character.findAll({
      offset: nav.step * nav.current,
      limit: nav.step,
      order: [["CurrentName", "ASC"]],
      attributes: ['Id', 'CurrentName', 'Image'],
      where : { GradeId : id},
      include: [{
        model: model.Clan,
        attributes:['Name', 'Image']
      }]
    })
  }
  const GetAllCharactersDashboard = (nav) => {
    console.log("GetAllCharactersDashboard", nav.step)
    return model.Character.findAll({
      attributes: ['Id', 'CurrentName', 'Image'],
      include: [{
        model: model.Clan,
        attributes:['Name', 'Image']
      }]
    }) 
  };
  const GetAllNamesAndIdsCharacters = () => {
    return model.Character.findAll({
      attributes: ['Id', 'CurrentName'],
      order: [["CurrentName", "ASC"]]
    })
  }

  const GetAllCharactersByUser = (user) => {
    console.log("GetAllCharactersByUser",user)
    return model.Character.findAll({
      order: [["UserName", "ASC"]],
      include: [        
        { model: model.Grade },
        {
          model: model.Clan,
          include: [{ model: model.Location }],          
        },
        { model: model.Warrior,
          include: [
            {
              model: model.Clan,
              include: [{ model: model.Location }],
              order: [["Id", "ASC"]],
            },
          ],
          order: [["ClanId", "ASC"]],
        },
      ],
    });
  };
  
  const GetCharacterByName = (name) => {
    console.log("**** GetCharacterByName ****", name);
    return model.Character.findOne({
      where: { CurrentName: name },
      include: [
        {
          model: model.GameCharacter,
          attributes: ['Id'],
          include: [{
            attributes: ['Id'],
            model: model.Game, include: [{
              model: model.Fiction,            
              attributes: ['Id', 'Title'],
            }]
          }]
        },
        { model: model.Chronology },
        { model: model.Grade },
        {
          model: model.Clan,
          include: [{ model: model.Location }],
          order: [["Id", "ASC"]],
        },
        {
          model: model.Warrior,
          attributes:['Name'],
          include: [
            {
              model: model.Clan,
              include: [{ model: model.Location }],
              order: [["Id", "ASC"]],
            },
          ],
          order: [["ClanId", "ASC"]],
        },
        {
          model: model.RelationCharacters,
          as: "RelationsOne",
          include: [
            { model: model.Character, as: "CharacterTwo" },
            { model: model.TypeRelation, as: "TypeRelation" },
          ],
        },
        {
          model: model.RelationCharacters,
          as: "RelationsTwo",
          include: [
            { model: model.Character, as: "CharacterOne" },
            { model: model.TypeRelation, as: "TypeRelation" },
          ],
        },
      ],
    });
  };
  
/**
 * 
 * @param {STRING} name 
 * @returns {Object}
 */
const GetCharacterByNameSearch = (name, nav) => {
  console.log("**** GetCharacterByNameSearch ****", name, nav);
  return model.Character.findAll({
    offset: nav.step * nav.current,
    limit: nav.step,
    where: {
      Id: { [model.Utils.Op.like]: `%${name}%` },
      CurrentName: { [model.Utils.Op.like]: `%${name}%` }
    },
    include: [
      {model: model.Clan,},
      { model: model.Grade },
      { model: model.Warrior },
    ],
  });
};
const GetAllCharactersByNameGradeAndClan = (data) => {
  console.log("GetAllCharactersByNameGradeAndClan", data);
  const typeSearch = data.typeSearch
  const Name = data.Name
  const Grade = data.Grade
  const Clan = data.Clan
}
// -------- CREATE ----------

const CreateANewCharacter = (data) => {
  console.log("CreateANewCharacter", data);
  const promises = [];
  let Name = data.CurrentName;
  var str = Name.replace(/\s+/g, '');
  const newCharacter = {
    Id: str,
    CurrentName: Name,
    Genre: data.Genre,
    KitName: data.KitName,
    ApprenticeName: data.ApprenticeName,
    WarriorName: data.WarriorName,
    OlderName: data.OlderName,
    LeaderName: data.LeaderName,
    Age: data.Age,
    Description: data.Description,
    Personnality: data.Personnality,
    Biography: data.Biography,
    Image: data.Image,
    GradeId: data.Grade,
    GradeId: data.Grade
  };
  const characterCreated = model.Character.create(newCharacter);
  promises.push(characterCreated);
  return characterCreated
    .then((w) => {
      const Warrior = {
        Id: str,
        Name: Name,
        Image: data.Image.name,
        ClanId: data.Clan,
      };
      const WarriorCreated = model.Warrior.create(Warrior)
      promises.push(WarriorCreated)
      return WarriorCreated
        .then((w) => {
          return Promise.all(promises)
        }
        ).catch((err) => {
          console.log(err)
          res.send(err).status(500);
        });
    })
    .catch((err) => {
      console.log(err)
      res.send(err).status(500);
    });
};

  module.exports = {
    countAllCharacters,
    CountNbOriginaleCharacterByName,
    CountCharacterByNameSearch,
    CountNbOriginaleCharacterByUser,
    CountNbCharactersByClan,
    CountCharacterByGrade,
    GetAllCharacters,
    GetAllCharactersByClan,
    GetAllCharactersByGrade,
    GetAllCharactersDashboard,
    GetAllNamesAndIdsCharacters,
    GetAllCharactersByUser,
    GetCharacterByName,
    GetCharacterByNameSearch,
    GetAllCharactersByNameGradeAndClan,    
    CreateANewCharacter,    
  }