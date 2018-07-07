const knexJs = require('knex');
const knexConfing = require('./knexfile');

const knex = knexJs(knexConfing);

module.exports = knex;