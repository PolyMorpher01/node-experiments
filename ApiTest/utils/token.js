const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_EXPIRY = parseInt(process.env.ACCESS_TOKEN_EXPIRY) * 60;
const ACCESS_TOKEN_SALT = process.env.ACCESS_TOKEN_SALT;
const REFRESH_TOKEN_SALT = process.env.REFRESH_TOKEN_SALT;

module.exports = {
  generateAuthTokens(encryptedData) {
    const accessToken = jwt.sign(
      {
        data: { payLoad: encryptedData }
      },
      ACCESS_TOKEN_SALT,
      { expiresIn: ACCESS_TOKEN_EXPIRY }
    );
    return accessToken;
  },

  generateRefreshToken(encryptedData) {
    const refreshToken = jwt.sign(
      {
        data: { payload: encryptedData }
      },
      REFRESH_TOKEN_SALT
    );

    return refreshToken;
  },

  verifyAccessToken(jwtToken) {
    return jwt.verify(jwtToken, ACCESS_TOKEN_SALT);
  },

  verifyRefreshToken(jwtToken) {
    return jwt.verify(jwtToken, REFRESH_TOKEN_SALT);
  }
};
