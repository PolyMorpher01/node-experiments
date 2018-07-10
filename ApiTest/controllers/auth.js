const express = require('express');

const authService = require('../services/auth');
const { authenticate } = require('../middlewares/authenticate');

const router = express.Router();

//POST: /api/auth/login
router.post('/login', (req, res, next) => {
  authService
    .checkLogin(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
});

//POST: /api/auth/refresh
router.post('/refresh', (req, res, next) => {
  const refreshToken = req.body.token;
  const userId = req.body.userId;

  authService
    .refresh(refreshToken, userId)
    .then(data => res.json(data))
    .catch(err => next(err));
});


//POST: /api/auth/logout
router.post('/logout', authenticate, (req, res, next) => {
  authService
    .logOut(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
});

module.exports = router;
