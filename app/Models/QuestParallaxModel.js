const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const QuestParallax = connection.define(
    "QuestParallax",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = QuestParallax