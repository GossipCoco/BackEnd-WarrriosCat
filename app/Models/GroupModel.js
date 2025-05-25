const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');

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