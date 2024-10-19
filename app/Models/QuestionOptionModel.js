const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require('./Function');

const QuestionOption  = connection.define('QuestionOption', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      OptionText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
}, {
    freezeTableName: true,
    timestamps: false,
  });

module.exports = QuestionOption;

