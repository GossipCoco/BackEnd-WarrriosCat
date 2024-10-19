const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const FictionIllustration = connection.define("FictionIllustration", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, { freezeTableName: true, timestamps: false });

  module.exports = FictionIllustration