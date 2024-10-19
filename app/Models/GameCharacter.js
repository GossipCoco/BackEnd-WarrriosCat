const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const GameCharacter = connection.define("GameCharacter", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, { freezeTableName: true, timestamps: false });

  module.exports = GameCharacter