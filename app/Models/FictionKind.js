const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const FictionKind = connection.define(
    "FictionKind",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = FictionKind