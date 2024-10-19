const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const BookCharacter = connection.define("BookCharacter", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, { freezeTableName: true, timestamps: false });

  module.exports = BookCharacter