const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require('./Function');

const GroupComment = connection.define(
  'GroupComment',
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    PostId: {
      type: DataTypes.STRING, // FK vers GroupPost.Id (NVARCHAR(50))
      allowNull: false,
    },
    AuthorId: {
      type: DataTypes.STRING, // FK vers User.Id (NVARCHAR(255) dans ta table)
      allowNull: false,
    },
    ParentId: {
      type: DataTypes.STRING, // self-ref (réponse à un commentaire)
      allowNull: true,
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    IsPinned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    CreatedAt: {
      type: 'DATETIME',
      defaultValue: new Date(functions.toDateTime(Date.now())).toISOString(),
    },
    UpdatedAt: {
      type: 'DATETIME',
      defaultValue: new Date(functions.toDateTime(Date.now())).toISOString(),
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = GroupComment;