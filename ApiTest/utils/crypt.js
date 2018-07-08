const bcrypt = require('bcrypt');

const env = require('../env');

module.exports = {
  encrypt(data) {
    const SALT = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(data, SALT);
  },

  dcrypt(data, source) {
    return bcrypt.compareSync(data, source);
  }
};