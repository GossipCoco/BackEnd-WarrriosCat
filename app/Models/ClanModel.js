const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Clan = connection.define(
    "Clan",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Symbol: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Clan