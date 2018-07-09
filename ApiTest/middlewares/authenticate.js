const jwt = require('jsonwebtoken');

const tokenUtils = require('../utils/token');


function authenticate(req, res, next) {
  const accessToken = req.get('authorization');
  try {
    tokenUtils.verifyAccessToken(accessToken);
    next();
  } catch (err) {
    res.status(401);
    res.end('Access Denied');
  }
}

module.exports.authenticate = authenticate;
