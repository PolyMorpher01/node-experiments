const userModel = require('../models/Users');
const userTokensModel = require('../models/UserTokens');

const tokenUtils = require('../utils/token');
const cryptUtils = require('../utils/crypt');

function checkLogin(loginParams) {
  return userModel.fetchByUserName(loginParams.user_name).then(data => {
    if (!data) {
      throw 'User does not exist';
    }
    const authToken = tokenUtils.generateAuthTokens(data);
    const refreshToken = tokenUtils.generateRefreshToken(data);
    const userTokenJson = {
      user_id: data.id,
      token: refreshToken
    };

    return userTokensModel.create(userTokenJson).then(() => {
      const isMatch = cryptUtils.dcrypt(loginParams.password, data.password);
      if (isMatch) {
        return {
          authToken,
          refreshToken
        };
      }

      throw 'password mismatch';
    });
  });
}

function refresh(refreshToken, userId) {
  return userModel.fetchById(userId).then(data => {
    const userJson = data;

    if (!userJson) {
      throw 'User does not exist';
    }

    return userTokensModel.fetchByToken(refreshToken).then(data => {
      if (data) {
        const newToken = tokenUtils.generateAuthTokens(userJson);
        return { newToken };
      }

      throw 'Invalid Token';
    });
  });
}

function logOut(tokenObj) {
  return userTokensModel.deleteByToken(tokenObj.token).then(data => {
    if (!data) {
      throw 'Token invalid';
    }
    return;
  });
}

module.exports = {
  checkLogin,
  refresh,
  logOut
}
