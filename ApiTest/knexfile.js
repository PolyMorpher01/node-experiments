const env = require('./env.js');
//database configuration
module.exports = {
    client: process.env.DB_CLIENT,
    connection: {
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: 'utf8',
      timezone: 'UTC'
    },
    // debug :true,
 /*    migrations: {
      tableName: 'migrations',
      directory: './migrations',
      stub: './stubs/migration.stub'
    },
    seeds: {
      directory: './seeds',
      stub: './stubs/seed.stub'
    } */
  };