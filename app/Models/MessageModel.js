// Sequelize model for Message
const { Model, DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton'); // Assuming your Sequelize instance
const functions = require ('./Function')

const Message = connection.define(
    "Message",{
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  SenderId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ReceiverId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  DateSend: {
    type: 'DATETIME',
    defaultValue: new Date(functions.toDateTime(Date.now())).toISOString(),
    defaultValue: DataTypes.NOW,
  },updatedAt:{
    type: 'DATETIME',
    defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
  },createdAt:{
    type: 'DATETIME',
    defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
  },
  Status: {
    type: DataTypes.STRING,
    defaultValue: 'sent',
  },
}, {
    connection,
  modelName: 'Message',
},
{ freezeTableName: true, timestamps: false });

module.exports = Message;
