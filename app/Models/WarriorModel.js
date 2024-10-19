const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const Warrior = connection.define(
    "Warrior",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
      },
      Image: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Warrior