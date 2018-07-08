const express = require("express");

const todoService = require("../services/todoService");
const { authenticate } = require("../middlewares/authenticate");

const router = express.Router();

//GET: /api/todos/
router.get("/", authenticate, (req, res) => {
  todoService
    .getAllList()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//GET: /api/todos/id
router.get("/:id", authenticate, (req, res) => {
  todoService
    .getById(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//POST: /api/todos/
router.post("/", authenticate, (req, res) => {
  todoService
    .createItem(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500);
      res.json(err);
    });
});

//PUT: /api/todos/:id
router.put("/:id", authenticate, (req, res) => {
  todoService
    .updateItem(req.params.id, req.body)
    .then(data => {
      res.json(data);
    })
    .catch(data => {
      res.status(500);
      res.json(err);
    });
});

//DELETE: /api/todos/:id
router.delete("/:id", authenticate, (req, res) => {
  todoService
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
