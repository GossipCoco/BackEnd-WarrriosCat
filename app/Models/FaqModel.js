const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Faq = connection.define(
    "Faq",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.STRING,
      },
      Content: {
        type: DataTypes.TEXT,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Faq