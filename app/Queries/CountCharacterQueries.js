const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')
const { Op } = require("sequelize");
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
    console.log("**** CountNbOriginaleCharacterByUser   *****************", usr);
    const request = model.Gamer.findAndCountAll({
      where: { UserId: usr },
      attributes: ['Id']
    });
    const promises = []
    promises.push(request)    
    return functions.countFuntion(request)  
}
const CountNbOriginaleCharacterByName = (id) => {
  console.log("********** CountNbOriginaleCharacterByName *****************", id);

  return model.Gamer.findAndCountAll({
    where: {
      CurrentName: {
        [Op.like]: `%${id}%`
      }
    }
  }).then(result => {
    return { ob: { count: result.count } };
  }).catch(err => {
    console.error(err);
    return { ob: { count: 0 }, error: true };
  });
};
const CountNbCharactersByClan = (id) => {
  console.log("**** CountNbCharactersByClan   *****************", id);
  const request = model.Character.findAndCountAll({
    where : { ClanId : id}
  })
  const promises = []
  promises.push(request)
  return functions.countFuntion(request)
}
const CountCharacterByGrade = id => {
  console.log("**** CountNbCharactersByGrade   *****************", id);
  const request = model.Character.findAndCountAll({
    where : { GradeId : id}
  })
  const promises = []
  promises.push(request)
  return functions.countFuntion(request)
}
module.exports = {    
    countAllCharacters,
    CountNbOriginaleCharacterByName,
    CountCharacterByNameSearch,
    CountNbOriginaleCharacterByUser,
    CountNbCharactersByClan,
    CountCharacterByGrade,
}