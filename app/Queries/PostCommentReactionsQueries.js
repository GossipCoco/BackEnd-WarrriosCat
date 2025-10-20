const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetPostAllCommentReactions = (id) =>{
    console.log("**** GetPostAllCommentReactions ****",id);
    return model.GroupPost.findAll({
        where: { GroupId: id },
        include:[
            {model: model.GroupComment}
        ]
    })
}
module.exports = {
    GetPostAllCommentReactions
}