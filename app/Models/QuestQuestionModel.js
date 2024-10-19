const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require('./Function');

const QuestQuestion  = connection.define('QuestQuestion', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      QuestionText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
}, {
    freezeTableName: true,
    timestamps: false,
  });

module.exports = QuestQuestion;