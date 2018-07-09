const express = require('express');

const authService = require('../services/auth');
const { authenticate } = require('../middlewares/authenticate');

const router = express.Router();

//POST: /api/auth/login
router.post('/login', (req, res) => {
  authService
    .checkLogin(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//POST: /api/auth/refresh
router.post('/refresh', (req, res) => {
  const refreshToken = req.body.token;
  const userId = req.body.userId;

  authService
    .refresh(refreshToken, userId)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});


//POST: /api/auth/logout
router.post('/logout', authenticate, (req, res) => {
  authService
    .logOut(req.body)
    .then(data => {
      res.send('Logged out successfully!');
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
