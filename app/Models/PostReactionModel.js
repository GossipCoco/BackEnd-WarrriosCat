const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require('./Function');

const PostReaction = connection.define('PostReaction', {
  Id:       { 
    type: DataTypes.STRING,
    primaryKey: true
},
  PostId:   {
    type: DataTypes.STRING,
    allowNull: false
},   // FK -> GroupPost.Id
  UserId:   {
    type: DataTypes.STRING,
    allowNull: false
},   // FK -> User.Id
  Emoji:    {
    type: DataTypes.STRING,
    allowNull: false
},
  CreatedAt:{
    type: 'DATETIME',
    defaultValue: new Date(functions.toDateTime(Date.now())).toISOString() }
},
{ freezeTableName: true, timestamps: false });

module.exports = PostReaction;
