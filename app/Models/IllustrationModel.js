const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const Illustration = connection.define(
    "Illustration",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      DateCreation: {
        type: DataTypes.DATE,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Illustration