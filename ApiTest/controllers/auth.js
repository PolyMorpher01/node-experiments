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

  authService
    .refresh(refreshToken)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//TODO better way than user_id
//GET: /api/auth/logout/user_id
router.get('/logout/:user_id', authenticate, (req, res) => {
  authService
    .logOut(req.params.user_id)
    .then(data => {
      res.json('Logged out successfully!');
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
