const { DataTypes, sequelize, Op } = require("sequelize");
const Sequelize = require('sequelize');
const connection = require('../DataLayer/connection');

const UserCharacter = connection.define("UserCharacter", {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, { freezeTableName: true, timestamps: false });

  module.exports = UserCharacter