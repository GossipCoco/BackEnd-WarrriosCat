const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require ('./Function')
const GameGamer = connection.define(
    "GameGamer",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = GameGamer 
  