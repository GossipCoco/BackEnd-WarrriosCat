const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Character = connection.define(
  "Character",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    CurrentName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    KitName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ApprenticeName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    WarriorName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    OlderName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LeaderName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Personnality: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Biography: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CurrentStatut: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);
  module.exports = Character