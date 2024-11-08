const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllKinds = () => {
     console.log("************ GetAllBooks ************")
     return model.Kind.findAll({})
}
module.exports = {
    GetAllKinds
}