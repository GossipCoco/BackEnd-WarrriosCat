const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const CharacterImage = connection.define("CharacterImage", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, { freezeTableName: true, timestamps: false });

module.exports = CharacterImage