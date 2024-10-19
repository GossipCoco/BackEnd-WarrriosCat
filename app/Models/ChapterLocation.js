const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const ChapterLocation = connection.define("ChapterLocation", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, { freezeTableName: true, timestamps: false });

  module.exports = ChapterLocation