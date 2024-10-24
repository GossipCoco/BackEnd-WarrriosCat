const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const Image = connection.define(
    "Image",
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
  module.exports = Image