const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllGroups = () =>{
    return model.Group.findAll({})
}
module.exports = {
    GetAllGroups
}