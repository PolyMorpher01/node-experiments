const express = require('express');

const userService = require('../services/user');

const router = express.Router();

//GET: /api/users/
router.get('/', (req, res, next) => {
  userService
    .getAllList()
    .then(data => res.json(data))
    .catch(err => next(err));
});

//GET: /api/users/id
router.get('/:id', (req, res, next) => {
  userService
    .getById(req.params.id)
    .then(data => res.json(data))
    .catch(err => next(err));
});

//POST: /api/users/
router.post('/', (req, res, next) => {
  userService
    .createItem(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
});

//PUT: /api/users/:id
router.put('/:id', (req, res, next) => {
  userService
    .updateItem(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
});

//DELETE: /api/users/:id
router.delete('/:id', (req, res, next) => {
  userService
    .deleteItem(req.params.id)
    .then(data => res.json(data))
    .catch(err => next(err));
});

module.exports = router;
