const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_EXPIRY = parseInt(process.env.ACCESS_TOKEN_EXPIRY) * 60;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

module.exports = {
  generateAuthTokens(encryptedData) {
    const accessToken = jwt.sign(
      {
        data: { payLoad: encryptedData }
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRY }
    );
    return accessToken;
  },

  generateRefreshToken(encryptedData) {
    const refreshToken = jwt.sign(
      {
        data: { payload: encryptedData }
      },
      REFRESH_TOKEN_SECRET
    );

    return refreshToken;
  },

  verifyAccessToken(jwtToken) {
    return jwt.verify(jwtToken, ACCESS_TOKEN_SECRET);
  },

  verifyRefreshToken(jwtToken) {
    return jwt.verify(jwtToken, REFRESH_TOKEN_SECRET);
  }
};
