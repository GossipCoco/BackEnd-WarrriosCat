const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const TypeGame = connection.define(
    "TypeGame",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = TypeGame