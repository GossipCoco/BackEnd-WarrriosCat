const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require ('./Function')
const UserEvent = connection.define('UserEvent', {
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
    EventId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Event',
        key: 'Id',
      }
    },
    Participated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    DateParticipated: {
      type: 'DATETIME',
      defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  module.exports = UserEvent