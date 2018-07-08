const jwt = require('jsonwebtoken');

const tokenUtils = require('../utils/token');
const authController = require('../controllers/auth');

function authenticate(req, res, next) {
  const accessToken = req.get('authorization');
  try {
    tokenUtils.verifyAccessToken(accessToken);
    next();
  } catch (err) {
    if(err.name === 'TokenExpiredError'){ 
      res.end('Token Expired');
    }
    res.status(401);
    res.end('Access Denied');
  }
}

module.exports.authenticate = authenticate;
