const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require('./Function');

const KeyObject = connection.define('KeyObject',{
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: true,  // Peut être facultatif
      }
}, {
    freezeTableName: true,
    timestamps: false,
  })

  module.exports = KeyObject