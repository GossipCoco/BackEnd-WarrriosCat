const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Battle = connection.define(
    "Battle",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.STRING,
      },
      Content: {
        type: DataTypes.TEXT,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Battle