const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllGroups = (nav) =>{
    console.log("**** GetAllGroups ****",nav);
    return model.Group.findAll({
            offset: nav.step * nav.current,
            limit: nav.step,
    })
}
const GetAllGroupsWithAllUsers = () => {
    return model.Group.findAll({
        include:[{
            model: model.UserGroup,
            include:[{
                model: model.User,
                attributes: ['UserName']
            },
        {model: model.Group,}]
        }]
    })
}
const GetAGroupById = (id) => {
    console.log("**** GetAGroupById ****", id);
    return model.Group.findOne({
        where: { Id: id },
        include:[
            {
            model: model.UserGroup,
            include:[{
                model: model.User                
            }]
        }]
    })
}
const GetGroupByPostId = (postId) => {
    console.log("**** GetGroupByPostId ****", postId);
    return model.GroupPost.findOne({
        where: { Id: postId },
        include:[
            {
                model: model.Group,
                attributes: ['Id','Name', 'Image','Background', 'Symbol','Subtitle'],
            }
        ]
    })
}
const GetGroupByCommentById = (Id) => {
    console.log("**** GetGroupByCommentById ****", Id);
    return model.GroupComment.findOne({
        where: { Id: Id },
        include:[
            {model: model.GroupPost,
            include:[
            {
                model: model.Group,
                attributes: ['Id','Name', 'Image','Background', 'Symbol','Subtitle'],
            }]
        }
        ]
    })
}
module.exports = {
    GetAllGroups,
    GetAllGroupsWithAllUsers,
    GetAGroupById,
    GetGroupByPostId,
    GetGroupByCommentById
}