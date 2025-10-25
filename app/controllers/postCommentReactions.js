const query = require('../Queries/PostCommentReactionsQueries')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const PostCommentReactions = {}

PostCommentReactions.GetPostAllCommentReactions = (req, res) => {
    handleResponse(res, query.GetPostAllCommentReactions(req.params.id))
}
PostCommentReactions.CreateANewPost = (req, res) => {
    handleResponse(res, query.CreateANewPost(req.params.id, req.body))
}
module.exports = PostCommentReactions