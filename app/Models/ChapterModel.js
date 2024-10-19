const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require ('./Function')



const Chapter = connection.define(
    "Chapter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      DateCreation: {
        type: 'DATETIME',
        allowNull: true,
        defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
      },
      NumberChapter: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      NbWords: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Chapter
  