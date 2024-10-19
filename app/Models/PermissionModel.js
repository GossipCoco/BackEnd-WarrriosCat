const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Permission = connection.define(
    "Permission",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
      },
      Permission: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = Permission