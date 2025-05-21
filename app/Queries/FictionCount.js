const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')

const countAllMyFictions = (usr) => {
  console.log("************ countAllMyFictions********* ", usr);
  const promises = []
  const request = model.Fiction.findAndCountAll({
    where: { UserId:usr },
  });
  promises.push(request)
  return functions.countFuntion(request)
};
const countAllFictionsOnBases = () => {
  console.log("******* countAllFictionsOnBases ********");
  const promises = []
  const request = model.Fiction.findAndCountAll({});
  promises.push(request)  
  return functions.countFuntion(request)
}

const CountTotalWordBuUser = (usr) => {
  console.log("**** CountTotalWordsByUser ****", usr);
  return model.Chapter.findAll({
    attributes: [
      'FictionId',
      [model.Sequelize.fn('SUM', Sequelize.col('NbWords')), 'total_words']
    ],
    include: [{
      model: model.Fiction,
      include: [{
        model: model.Game,
        include: [{
          model: model.UserGame,
          where: { UserId: usr }
        }]
      }]
    }],
    group: ['Chapter.FictionId'], // Assure-toi que le groupement est correct
    raw: true
  });
}
const CountTotalWordByUserV2 = (usr) => {
  console.log("**** CountTotalWordsByUserV2 ****", usr);
  return model.Game.findAll({
    include: [{
      model: model.Fiction,
      where: { UserId: usr },
      attributes: ['Id'],
      include: [{
        model: model.Chapter,
        attributes: ['NbWords'],
        group: ['Chapter.FictionId'],
        raw: true
      }]
    }]
  });
};
const queries = {
  countAllFictionsOnBases,
  countAllMyFictions,
  CountTotalWordBuUser,
  CountTotalWordByUserV2
}
module.exports = queries;