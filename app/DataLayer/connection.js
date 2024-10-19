const { Sequelize } = require('sequelize');
const config = require('../config/db.config');

class Database {
  constructor() {
    if (!Database.instance) {
      this._init();
      Database.instance = this;
    }

    return Database.instance;
  }

  _init() {
    this.connection = new Sequelize(config.BDD.SQLServer);

    this.connection
      .authenticate()
      .then(() => {
        console.log('Back end Connection successful');
      })
      .catch(err => {
        console.log('Error connecting to the database:', err);
      });
  }

  getConnection() {
    return this.connection;
  }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance.getConnection(); // Exporte directement l'instance Sequelize