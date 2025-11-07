const express = require('express')
const PostCommentReactions = require('../controllers/postCommentReactions') 

const router = express.Router()

router
.get('/GetPostAllCommentReactions/:id', PostCommentReactions.GetPostAllCommentReactions)
.get('/GetAPostAllCommentReactionsById/:id', PostCommentReactions.GetAPostAllCommentReactionsById)
.post('/GetAllPostsByGroupId/:id', PostCommentReactions.GetAllPostsByGroupId)
.get('/CountAllPostByGroupId/:id', PostCommentReactions.CountAllPostByGroupId)
.post('/CreateANewPost/:id', PostCommentReactions.CreateANewPost)
module.exports = router;