const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const ChapterIllustration = connection.define("ChapterIllustration", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, { freezeTableName: true, timestamps: false });

  module.exports = ChapterIllustration