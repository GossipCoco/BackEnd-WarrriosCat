const query = require('../Queries/PostCommentReactionsQueries')
const { handleResponse } = require("../Functions/handleResponse");  // Importer la fonction
const PostCommentReactions = {}

PostCommentReactions.GetPostAllCommentReactions = (req, res) => {
    handleResponse(res, query.GetPostAllCommentReactions(req.params.id))
}
PostCommentReactions.GetAllPostsByGroupId = (req, res) => {
    handleResponse(res, query.GetAllPostsByGroupId(req.params.id, req.body))
}   
PostCommentReactions.GetAPostAllCommentReactionsById = (req, res) => {
    handleResponse(res, query.GetAPostAllCommentReactionsById(req.params.id))
}
PostCommentReactions.CreateANewPost = (req, res) => {
    handleResponse(res, query.CreateANewPost(req.params.id, req.body))
}
PostCommentReactions.CountAllPostByGroupId = (req, res) => {
    handleResponse(res, query.CountAllPostByGroupId(req.params.id))
}
module.exports = PostCommentReactions