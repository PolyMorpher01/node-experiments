const bcrypt = require('bcrypt');

const env = require('../env');

const SALT_FACTOR = parseInt(process.env.SALT_FACTOR)

module.exports = {
  encrypt(data) {
    const SALT = bcrypt.genSaltSync(SALT_FACTOR);
    return bcrypt.hashSync(data, SALT);
  },

  dcrypt(data, source) {
    return bcrypt.compareSync(data, source);
  }
};