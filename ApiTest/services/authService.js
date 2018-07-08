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
        userId: data.id,
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
};
