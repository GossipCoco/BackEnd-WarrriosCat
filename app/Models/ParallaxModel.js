const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Parallax = connection.define(
    "Parallax",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Image: {
        type: DataTypes.STRING,
      },
      Position: {
        type: DataTypes.STRING,
      },
      translateZ: {
        type: DataTypes.STRING,
      },
      translateY: {
        type: DataTypes.STRING,
      },
      translateX: {
        type: DataTypes.STRING,
      },
      scale: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Parallax