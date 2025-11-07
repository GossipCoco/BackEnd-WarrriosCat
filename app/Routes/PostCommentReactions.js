const express = require('express')
const PostCommentReactions = require('../controllers/postCommentReactions') 

const router = express.Router()

router
.get('/GetPostAllCommentReactions/:id', PostCommentReactions.GetPostAllCommentReactions)
.get('/GetAPostAllCommentReactionsById/:id', PostCommentReactions.GetAPostAllCommentReactionsById)
.get('/GetAllPostsByGroupId/:id', PostCommentReactions.GetAllPostsByGroupId)
.post('/CreateANewPost/:id', PostCommentReactions.CreateANewPost)
module.exports = router;