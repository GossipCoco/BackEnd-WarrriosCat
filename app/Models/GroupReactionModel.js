const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require('./Function');

const GroupReaction = connection.define(
  'GroupReaction',
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    // 1 = Post, 2 = Comment (garde ton mapping côté app/constantes)
    TargetType: {
      type: DataTypes.INTEGER,      
    },
    // Id du GroupPost OU du GroupComment selon TargetType
    TargetId: {
      type: DataTypes.STRING,
    },
    // FK -> User.Id (même logique que tes autres modèles)
    UserId: {
      type: DataTypes.STRING,
    },
    // Emoji court (👍 ❤️ 🐾 ...). Laisse la longueur souple si tu préfères.
    Emoji: {
      type: DataTypes.STRING,
    },
    CreatedAt: {
      type: 'DATETIME',
      defaultValue: new Date(functions.toDateTime(Date.now())).toISOString(),
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = GroupReaction;
