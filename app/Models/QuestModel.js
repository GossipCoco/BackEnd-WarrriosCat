const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require('./Function');

const Quest = connection.define('Quest', {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    PointsReward: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DateCreated: {
      type: 'DATETIME',
      defaultValue: new Date(functions.toDateTime(Date.now())).toISOString(),
    },
    ActionType: {
      type: DataTypes.STRING,
      allowNull: true,  // Peut être facultatif selon les données
    },
    Hint: {
      type: DataTypes.TEXT,
      allowNull: true,  // Peut être facultatif
    },
    CompletionCriteria: {
      type: DataTypes.TEXT,
      allowNull: true,  // Peut être facultatif
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,  // Définit la valeur par défaut à true
    },
    DifficultyLevel: {
      type: DataTypes.STRING,
      allowNull: true,  // Peut être facultatif
    },
    ObjectiveDescription: {
      type: DataTypes.TEXT,
      allowNull: true,  // Peut être facultatif
    },TypeQuest: {
      type: DataTypes.STRING,
      allowNull: true,  // Peut être facultatif
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

module.exports = Quest;