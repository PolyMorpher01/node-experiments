const bcrypt = require('bcrypt');

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

module.exports = {
  encrypt(data) {
    const SALT = bcrypt.genSaltSync(SALT_ROUNDS);
    return bcrypt.hashSync(data, SALT);
  },

  dcrypt(data, source) {
    return bcrypt.compareSync(data, source);
  }
};
