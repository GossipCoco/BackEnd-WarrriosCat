const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require ('./Function')
const Notification = connection.define('Notification', {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'Id',
      }
    },
    Message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    DateCreated: {
      type: 'DATETIME',
      defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
    },
    Read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  module.exports = Notification