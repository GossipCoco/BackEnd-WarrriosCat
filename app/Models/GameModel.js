const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require ('./Function')
const Game = connection.define(
    "Game",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      DateCreation: {
        type: 'DATETIME',
        defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Game 
  