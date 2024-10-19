const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Arc = connection.define(
  "Arc",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    IllustrationOne: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    IllustrationTwo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    IllustrationThree: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    IllustrationFour: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    IllustrationFive: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    IllustrationSix: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ArcNumber: {
      type: DataTypes.INTEGER
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Arc;
