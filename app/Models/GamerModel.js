// Sequelize model for Message

const { Model, DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton'); // Assuming your Sequelize instance
const functions = require ('./Function')
const Gamer = connection.define(
    "Gamer",
    {
        Id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        UserId: {
            type: DataTypes.STRING(255),
            allowNull: false,
            references: {
                model: 'User', // Nom de la table de référence
                key: 'Id' // Nom de la clé de référence
            }
        },
        UserName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        Image: {
            type: DataTypes.STRING(255)
        },
        Description: {
            type: DataTypes.TEXT
        },
        Biography: {
            type: DataTypes.TEXT
        },
        Personnality: {
            type: DataTypes.TEXT
        },
        ClanId: {
            type: DataTypes.STRING(255),
            allowNull: false,
            references: {
                model: 'Clan', // Nom de la table de référence
                key: 'Id' // Nom de la clé de référence
            }
        },
        Status: {
            type: DataTypes.STRING(255)
        },
        Genre: {
            type: DataTypes.STRING(255)
        },
        KitName: {
            type: DataTypes.STRING(255)
        },
        ApprenticeName: {
            type: DataTypes.STRING(255)
        },
        WarriorName: {
            type: DataTypes.STRING(255)
        },
    },
    { freezeTableName: true, timestamps: false }
);

module.exports = Gamer;