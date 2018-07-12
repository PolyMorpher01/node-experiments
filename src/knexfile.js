const dotenv = require('dotenv').config({ path: `${__dirname}/../.env` });

let connection;
if (process.env.DATABASE_URL) {
  connection = process.env.DATABASE_URL;
} else {
  connection = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8',
    timezone: 'UTC'
  };
}

//database configuration
module.exports = {
  client: process.env.DB_CLIENT,
  connection,
  // debug :true,
};
