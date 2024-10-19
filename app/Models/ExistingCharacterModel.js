const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const ExistingCharacter = connection.define(
    "ExistingCharacter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      FirstApparition: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = ExistingCharacter