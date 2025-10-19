const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require('./Function');

const GroupPost = connection.define(
  'GroupPost',
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    GroupId: {
      type: DataTypes.STRING, // FK vers Group.Id
      allowNull: false,
    },
    AuthorId: {
      type: DataTypes.STRING, // FK vers User.Id
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING(255),
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

// Optionnel : petit helper pour maj UpdatedAt avant update
// GroupPost.beforeUpdate((instance) => {
//   instance.UpdatedAt = new Date(functions.toDateTime(Date.now())).toISOString();
// });

module.exports = GroupPost;
