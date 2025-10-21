const express = require('express')
const PostCommentReactions = require('../controllers/postCommentReactions') 

const router = express.Router()

router
.get('/GetPostAllCommentReactions/:id', PostCommentReactions.GetPostAllCommentReactions)
module.exports = router;