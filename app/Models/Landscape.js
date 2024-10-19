const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

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