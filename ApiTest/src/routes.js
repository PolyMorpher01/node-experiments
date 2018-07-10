const express = require('express');

const todosController = require('./controllers/todo');
const usersController = require('./controllers/user');
const authController = require('./controllers/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    app: 'todo App'
  });
});

router.use('/todos', todosController);
router.use('/users', usersController);
router.use('/auth', authController);

module.exports = router;