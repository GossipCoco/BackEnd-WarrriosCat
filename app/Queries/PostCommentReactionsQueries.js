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
            { model: model.GroupComment},
            { model: model.PostReaction}
        ]
    })
}
const CreateANewPost = (id, data) => {
    console.log("**** CreateANewPost ****",id, data);
    const date = new Date().toISOString();
    const postId = uuidv4();
    return model.GroupPost.create({
        Id: postId,
        Content: data.Content,
        DateCreation: date,
        UserId: data.UserId,
        GroupId: data.id
    })
}
module.exports = {
    GetPostAllCommentReactions,
    CreateANewPost
}