const userModel = require('../models/Users');
const userTokensModel = require('../models/UserTokens');

const tokenUtils = require('../utils/token');
const cryptUtils = require('../utils/crypt');

module.exports = {
  checkLogin(loginParams) {
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
  },

  refresh(refreshToken, user_id) {
    return userModel.fetchById(user_id).then(data => {
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
  },

  logOut(user_id) {
    return userTokensModel.delete(user_id).then(data => {
      if (!data) {
        throw 'User is not logged in';
      }
      return
    });
  }
};
