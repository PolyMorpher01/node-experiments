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
        console.log(isMatch);
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

  async refresh(refreshToken) {
    try {
      const { data } = tokenUtils.verifyRefreshToken(refreshToken);
      const userJson = data.payload;

      const token = tokenUtils.generateAuthTokens(userJson);

      return {
        token
      };

    } catch (err) {
      throw 'Invalid Token';
    }
  },

  logOut(user_id){
    return userTokensModel.delete(user_id).then((data)=>{
      if(!data){
        throw 'User is not logged in';
      }
    })
  }
};
