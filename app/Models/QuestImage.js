const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const QuestImage = connection.define('QuestImage', {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  QuestId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = QuestImage;