const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require('./Function');

const QuestKeyObject = connection.define('QuestKeyObject',{
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
}, {
    freezeTableName: true,
    timestamps: false,
  })

  module.exports = QuestKeyObject