const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const FictionLocation = connection.define("FictionLocation", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, { freezeTableName: true, timestamps: false });

  module.exports = FictionLocation