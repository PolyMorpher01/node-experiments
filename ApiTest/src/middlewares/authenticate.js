const jwt = require('jsonwebtoken');
const Boom = require('boom');

const tokenUtils = require('../utils/token');

function authenticate(req, res, next) {
  const accessToken = req.get('authorization');
  try {
    const tokenData = tokenUtils.verifyAccessToken(accessToken);
    const userObj = tokenData.data.payLoad;
    req.userId = userObj.id;
    next();
  } catch (err) {
    next(Boom.unauthorized('Access Denied'));
  }
}

module.exports.authenticate = authenticate;
