const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const functions = require('../Functions/countFunctions')
/**
 * 
 * @returns {Object}
 */
const GetTotalQuest = () => {    
    console.log("******** GetTotalQuest ********")
    const promises = []
    const request = model.Quest.findAndCountAll({})
    promises.push(request)
    return functions.countFuntion(request)
}
/**
 * 
 * @param {Object} nav 
 * @returns {Object}
 */
const GetAllQuests = (nav) => {
    console.log("******** GetAllQuests ********", nav)
    return model.Quest.findAll({
        offset: nav.step * nav.current,
        limit: nav.step,
        order: [["Id", "ASC"]],
        include: [{  model: model.QuestImage }]
    })
}
const GetQuestById = (id) => {
  console.log("******** GetQuestById ********", id)
  return model.Quest.findOne({
    where: { Id: id},
    include: [
      {model: model.QuestKeyObject,
        include : [{
          model: model.KeyObject
        }]
       },
      {
        model: model.QuestQuestionModel,
        include: [
          { model: model.QuestionOptionModel },
          { model: model.QuestionOptionModel, as: 'CorrectAnswer' } // Pour inclure la bonne réponse
        ]
      },
      { model: model.QuestParallax, 
        include: [{
          model: model.Parallax
        }]
      }]
  })
}
module.exports = {
    GetAllQuests,
    GetTotalQuest,
    GetQuestById
}
