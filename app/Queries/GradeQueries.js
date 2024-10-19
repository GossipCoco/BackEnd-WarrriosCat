const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllGrades = () => {
    return model.Grade.findAll({})
}
  
module.exports = {
    GetAllGrades
}