const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetPostAllCommentReactions = (id) =>{
    console.log("**** GetPostAllCommentReactions ****",id);
    return model.GroupPost.findAll({
        where: { GroupId: id },
        limit: 3,
        include:[
            { model: model.User,attributes: ['UserName']},
            {model: model.GroupComment},
            {model: model.PostReaction}
        ]
    })
}
module.exports = {
    GetPostAllCommentReactions
}