const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const functions = require ('./Function')

const Comments = connection.define(
    "Comments",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },    
      Content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },    
      DateCreation: {
        type: 'DATETIME',
        defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
      },
      updatedAt:{
        type: 'DATETIME',
        defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
      },
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'User',
          key: 'Id',
        }
      },
      FictionId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Fiction',
          key: 'Id',
        }
      },
    },
  );
  module.exports = Comments