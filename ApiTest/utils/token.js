const jwt = require('jsonwebtoken');
const env = require('../env');

const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
const ACCESS_TOKEN_SALT = process.env.ACCESS_TOKEN_SALT;
const REFRESH_TOKEN_SALT = process.env.REFRESH_TOKEN_SALT;

module.exports = {
  generateAuthTokens(encryptedData) {
    let accessToken = jwt.sign(
      {
        data: { payLoad: encryptedData },
        exp: Date.now() + ACCESS_TOKEN_EXPIRY
      },
      ACCESS_TOKEN_SALT
    );

    return accessToken;
  },

  generateRefreshToken(encryptedData) {
    let refreshToken = jwt.sign(
      {
        data: { payload: encryptedData }
      },
      REFRESH_TOKEN_SALT
    );

    return refreshToken;
  },

  verifyAccessToken(jwtToken) {
    return jwt.verify(jwtToken, ACCESS_TOKEN_SALT);
  }
};
