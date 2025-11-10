const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require ('./Function')
const Group = connection.define(
    "Group",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name:{
        type: DataTypes.STRING,
      },
      Description:{
        type: DataTypes.TEXT,
      },
      CompleteDescription:{
        type: DataTypes.TEXT,
      },
      Image:{
        type: DataTypes.STRING,
      },
      Background:{
        type: DataTypes.STRING,
      },
      Symbol:{
        type: DataTypes.STRING,
      },
      CreatedAt:{
        type: 'DATETIME',
        defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
      },
      UpdatedAt:{
        type: 'DATETIME',
        defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
      },
    },

    { freezeTableName: true, timestamps: false }
)
  module.exports = Group