const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const functions = require('../Functions/countFunctions')

const countAllGroups = () => {
    console.log("******* countAllGroups ********");
    const promises = []
    const request = model.Group.findAndCountAll({});
    promises.push(request)  
    return functions.countFuntion(request)

}
const queries = {
    countAllGroups
};