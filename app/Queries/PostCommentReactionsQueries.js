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
const GetAllPostsByGroupId = (Id) => {
    console.log("**** GetAllPostsById ****", Id);
    return model.GroupPost.findAll({
        where: { GroupId: Id },
        include: [
            { model: model.User, attributes: ['UserName', 'Avatar'] },                 // auteur du post
            { model: model.Group, attributes: ['Id', 'Image', 'Name', 'Background'] },  // infos groupe
            { model: model.PostReaction, required: false },                           // (option) réactions du post
        ]
    })
}
const GetAPostAllCommentReactionsById = (postId) => {
  console.log("**** GetAPostAllCommentReactions ****", postId);

  return model.GroupPost.findOne({
    where: { Id: postId },
    include: [
      { model: model.User,  attributes: ['UserName', 'Avatar'] },                 // auteur du post
      { model: model.Group, attributes: ['Id', 'Image', 'Name', 'Background'] },  // infos groupe
      // { model: model.PostReaction, required: false },                           // (option) réactions du post
    ]
  })
  .then(post => {
    if (!post) return null;

    return model.GroupComment.findAll({
      where: { PostId: postId },
      include: [
        { model: model.User, attributes: ['UserName', 'Avatar'] },                // auteur du comment
        // { model: model.CommentReaction, required: false },                      // (option) réactions du comment
      ],
      order: [['CreatedAt', 'ASC']]
    })
    .then(rows => {
      // build arbre
      const plain = rows.map(r => r.get({ plain: true }));
      const byId = new Map();
      plain.forEach(n => { n.Replies = []; byId.set(n.Id, n); });

      const roots = [];
      for (const n of plain) {
        if (n.ParentId && byId.has(n.ParentId)) byId.get(n.ParentId).Replies.push(n);
        else if (!n.ParentId) roots.push(n);
        else roots.push(n); // fallback si parent absent
      }
      // tri récursif (chrono)
      const sortDeep = (arr) => {
        arr.sort((a,b) => new Date(a.CreatedAt) - new Date(b.CreatedAt));
        arr.forEach(x => x.Replies && sortDeep(x.Replies));
      };
      sortDeep(roots);

      post.setDataValue('Comments', roots);
      post.setDataValue('commentCount', plain.length);
      return post;
    });
  });
};

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
    GetAllPostsByGroupId,
    GetAPostAllCommentReactionsById,
    CreateANewPost
}