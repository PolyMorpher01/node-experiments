//database configuration
module.exports = {
    client: 'pg',
    connection: {
      port: '5432',
      host: 'localhost',
      user: 'postgres',
      password: 'root',
      database: 'test',
      charset: 'utf8',
      timezone: 'UTC'
    },
  //   migrations: {
  //     tableName: 'migrations',
  //     directory: './migrations',
  //     stub: './stubs/migration.stub'
  //   },
  //   seeds: {
  //     directory: './seeds',
  //     stub: './stubs/seed.stub'
  //   }
  };