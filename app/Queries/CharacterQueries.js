const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')

const countAllCharacters = () => {
    console.log("**** countAllCharacters   *****************");
    const request = model.Character.findAndCountAll({ attributes: ['Id'] });
    const promises = []
    promises.push(request)
    return functions.countFuntion(request)
  };
const CountCharacterByNameSearch = (id) => {
  console.log("**** CountCharacterByNameSearch ****", id);
  const request = model.Character.findAndCountAll({
    where: {
      Id: { [model.Utils.Op.like]: `%${id}%` },
      CurrentName: { [model.Utils.Op.like]: `%${id}%` }
    },
    attributes: ['Id']
  });
  const promises = []
  promises.push(request)
  return functions.countFuntion(request)
}
const CountNbOriginaleCharacterByUser = (usr) => {  
    console.log("**** countAllCharacters   *****************", usr);
    const request = model.Gamer.findAndCountAll({
      where: { UserId: usr },
      attributes: ['Id']
    });
    const promises = []
    promises.push(request)    
    return functions.countFuntion(request)  
}
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
          attributes:['Id', 'Name', 'Image']
        },
        {
          model: model.Warrior,
          attributes:['Name']          
        },
      ],
    });
  };
  
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
  const GetAllNamesAndIdsOriginaCharacters = (usr) => {
    console.log("GetAllNamesAndIdsOriginaCharacters", usr)
    return model.Gamer.findAll({
      where: { UserId: usr },
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
        {
          model: model.Warrior,
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
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,            
          },
        ],
      },
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

const GetOriginaleCharacterByUser = (usr, nav) => {  
  console.log("GetOriginaleCharacterByUser", usr, nav);
  return model.Gamer.findAll({
    where: { UserId: usr }, 
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
    countAllCharacters,
    CountCharacterByNameSearch,
    CountNbOriginaleCharacterByUser,
    GetAllCharacters,
    GetAllCharactersDashboard,
    GetAllNamesAndIdsCharacters,
    GetAllNamesAndIdsOriginaCharacters,
    GetAllCharactersByUser,
    GetCharacterByName,
    GetCharacterByNameSearch,
    GetAllCharactersByNameGradeAndClan,
    GetAllNamesOfAllCharacters,
    GetOriginaleCharacterByUser,
    GetOneOriginaleCharacterByName,
    CreateANewCharacter,
    CreateAnOriginalCharacter,
    EditOriginalCharacter
  }