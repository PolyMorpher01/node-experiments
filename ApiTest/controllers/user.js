const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

//GET: /api/users/
router.get('/', (req, res) => {
  userService
    .getAllList()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//GET: /api/users/id
router.get('/:id', (req, res) => {
  userService
    .getById(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//POST: /api/users/
router.post('/', (req, res) => {
  userService
    .createItem(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//PUT: /api/users/:id
router.put('/:id', (req, res) => {
  userService
    .updateItem(req.params.id, req.body)
    .then(data => {
      res.json(data);
    })
    .catch(data => {
      res.status(500);
      res.json(err);
    });
});

//DELETE: /api/users/:id
router.delete('/:id', (req, res) => {
  userService
    .deleteItem(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(data => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
