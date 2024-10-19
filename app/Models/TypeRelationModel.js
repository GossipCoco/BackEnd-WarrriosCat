const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const TypeRelation = connection.define(
    "TypeRelation",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = TypeRelation 