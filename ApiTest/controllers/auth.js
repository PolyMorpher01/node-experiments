const express = require('express');

const authService = require('../services/authService');
const { authenticate } = require('../middlewares/authenticate');

const router = express.Router();

//POST: /api/auth/
router.post('/', (req, res) => {
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
  const user_id = req.body.user_id;

  authService
    .refresh(refreshToken, user_id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});


//POST: /api/auth/logout
router.post('/logout/', authenticate, (req, res) => {
  authService
    .logOut(req.body)
    .then(data => {
      res.json('Logged out successfully!');
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
