const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const OriginalCharacter = connection.define(
    "OriginalCharacter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      FreeUsing: {
        type: DataTypes.BOOLEAN,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = OriginalCharacter