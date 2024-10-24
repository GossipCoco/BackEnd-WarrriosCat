module.exports = {
    secret: "gossip-coco-key",
    JWT: {
      secret: 'gossip-coco-key',
      expire: '24h'
    },
    __dirname:"C:\\Users\\gossi\\Documents\\Project\\Project-Warriors\\front-app-v3\\public",
    BDD: {
      SQLServer: {
        "username": "sa",
        "password": '23031983',
        "database": "laGuerreDesClans",
        "host": "localhost",
        "dialect": "mssql",
        dialectOptions: {
          options: {
            encrypt: true, // Si nécessaire pour votre configuration MSSQL
            requestTimeout: 30000 // 30 secondes
          }
        },
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        options: {
          instanceName: 'sqlexpress'
        }
      },
    },
  };