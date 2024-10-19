const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

const UserGame = connection.define('UsersGame', {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  GameId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UserId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = UserGame;