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
const GetAPostAllCommentReactionsById = (id) => {
  console.log("**** GetAPostAllCommentReactions ****", id);

  return model.GroupPost.findOne({
    where: { Id: id },
    include: [
      // Auteur du post
      { model: model.User, attributes: ['UserName', 'Avatar'] },

      // Commentaires de 1er niveau
      {
        model: model.GroupComment,
        required: false,
        // (optionnel) ne garder que les racines :
        // where: { ParentId: null },
        include: [
          // Auteur du commentaire
          { model: model.User, attributes: ['UserName', 'Avatar'] },

          // ✅ Réponses (self-association) -> alias obligatoire
          {
            model: model.GroupComment,
            as: 'Replies',
            required: false,
            include: [
              { model: model.User, attributes: ['UserName', 'Avatar'] }
            ]
          }

          // (optionnel) Pour récupérer aussi le parent d’un commentaire donné :
          // { model: model.GroupComment, as: 'Parent', required: false }
        ]
      },

      // Réactions sur le post
      { model: model.PostReaction, required: false },

      // Infos du groupe
      { model: model.Group, attributes: ['Id', 'Image', 'Name', 'Background'] }
    ],
    // (optionnel) tri : commentaires récents en premier, puis replies chronos
    order: [
      [model.GroupComment, 'CreatedAt', 'DESC'],
      [model.GroupComment, { model: model.GroupComment, as: 'Replies' }, 'CreatedAt', 'ASC']
    ]
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
    GetAPostAllCommentReactionsById,
    CreateANewPost
}