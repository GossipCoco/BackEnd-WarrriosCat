const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require ('./Function')
const Points = connection.define('Points', {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User', // 'User' refers to table name
        key: 'Id',
      }
    },
    Points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    DateEarned: {
      type: 'DATETIME',
      defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  module.exports = Points