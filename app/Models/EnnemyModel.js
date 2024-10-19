const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const Ennemy = connection.define(
    "Ennemy",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
      },
      Description: {
        type: DataTypes.TEXT,
      },
      Image: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

module.exports = Ennemy