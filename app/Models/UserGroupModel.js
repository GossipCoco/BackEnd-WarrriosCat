const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require ('./Function')
const  UserGroup = connection.define(
    "UserGroup",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Role:{
        type: DataTypes.STRING,
      },
      Badge:{
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

module.exports = UserGroup;