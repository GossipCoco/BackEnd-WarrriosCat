const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Landscape = connection.define(
    "Landscape",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = Landscape