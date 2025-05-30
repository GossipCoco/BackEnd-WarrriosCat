const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllGroups = () =>{
    return model.Group.findAll({})
}
const GetAllGroupsWithAllUsers = () => {
    return model.Group.findAll({
        include:[{
            model: model.UserGroup,
            include:[{
                model: model.User,
                attributes: ['UserName']
            }]
        }]
    })
}
module.exports = {
    GetAllGroups,
    GetAllGroupsWithAllUsers
}