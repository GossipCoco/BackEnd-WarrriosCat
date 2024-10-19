const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Chronology = connection.define(
  "Chronology",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    EventDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EventType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EventDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Chronology;
