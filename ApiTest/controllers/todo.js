const express = require('express');

const todoService = require('../services/todo');
const { authenticate } = require('../middlewares/authenticate');

const router = express.Router();

//GET: /api/todos/
router.get('/', authenticate, (req, res) => {
  const accessToken = req.get('authorization');
  todoService
    .getAllList(accessToken)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//GET: /api/todos/id
router.get('/:id', authenticate, (req, res) => {
  const accessToken = req.get('authorization');
  todoService
    .getById(req.params.id, accessToken)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//POST: /api/todos/
router.post('/', authenticate, (req, res) => {
  const accessToken = req.get('authorization');
  todoService
    .createItem(req.body, accessToken)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//PUT: /api/todos/:id
router.put('/:id', authenticate, (req, res) => {
  const accessToken = req.get('authorization');
  todoService
    .updateItem(req.params.id, req.body, accessToken)
    .then(data => {
      res.json(data);
    })
    .catch(data => {
      res.status(500);
      res.json(err);
    });
});

//DELETE: /api/todos/:id
router.delete('/:id', authenticate, (req, res) => {
  const accessToken = req.get('authorization');
  todoService
    .deleteItem(req.params.id, accessToken)
    .then(data => {
      res.json(data);
    })
    .catch(data => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
