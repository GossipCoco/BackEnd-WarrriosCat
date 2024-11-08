const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const Kind = connection.define(
    "Kind",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = Kind