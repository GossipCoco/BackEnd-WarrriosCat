const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

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
      
      Location: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      
      Personnality: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      
      Skill: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      
      Fight: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      
      Hunting: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      
      Prey: {
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