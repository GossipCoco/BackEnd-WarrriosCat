const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetPostAllCommentReactions = (id) =>{
    console.log("**** GetPostAllCommentReactions ****",id);
    return model.GroupPost.findAll({
        where: { GroupId: id },
        limit: 3,
        include:[
            { model: model.User,attributes: ['UserName', 'Avatar']},
            { model: model.GroupComment},
            { model: model.PostReaction}
        ]
    })
}
const GetAPostAllCommentReactionsById = (id) =>{
    console.log("**** GetAPostAllCommentReactions ****",id);
    return model.GroupPost.findOne({
        where: { Id: id },
        include:[
            { model: model.User,attributes: ['UserName', 'Avatar']},
            { model: model.GroupComment},
            { model: model.PostReaction},
            {
                model: model.Group,
                attributes: ['Id', 'Image', 'Name']
            }
        ]
    })
}
const CreateANewPost = (id, data) => {
    console.log("**** CreateANewPost ****",id, data);
    const date = new Date().toISOString();
    const postId = uuidv4();
    return model.GroupPost.create({
        Id: postId,
        Title: data.Title,
        Content: data.Content,
        DateCreation: date,
        AuthorId: data.UserId,
        GroupId: id,
        isPinned: false,
    })
}
module.exports = {
    GetPostAllCommentReactions,
    GetAPostAllCommentReactionsById,
    CreateANewPost
}