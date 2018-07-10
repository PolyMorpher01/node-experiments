const jwt = require('jsonwebtoken');
const Boom = require('boom');

const tokenUtils = require('../utils/token');

function authenticate(req, res, next) {
  const accessToken = req.get('authorization');
  try {
    tokenUtils.verifyAccessToken(accessToken);
    next();
  } catch (err) {
    next(Boom.unauthorized('Access Denied'))
  }
}

module.exports.authenticate = authenticate;
