const { DataTypes, sequelize, Op } = require("sequelize");
const Sequelize = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require ('./Function')
const User = connection.define('User', {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  LastName: {
    type: DataTypes.STRING,
  },
  FirstName: {
    type: DataTypes.STRING,
  },
  Login: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Password: {
    type: DataTypes.STRING,
  },
  UserName: {
    type: DataTypes.STRING,
  },
  Avatar: {
    type: DataTypes.STRING,
  },
  Birthday: {
    type: 'DATETIME',
    defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()},
  Inscription: {
    type: 'DATETIME',
    defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
  },
  LastConnexion: {
    type: 'DATETIME',
    defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
  },
  Description: {
    type: 'DATETIME',
    defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
  },
  Biography: {
    type: DataTypes.TEXT,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = User;