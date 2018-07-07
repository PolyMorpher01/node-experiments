const express = require('express');
const todoService = require('../services/todoService');


const router = express.Router();


//GET: /api/todo/
router.get('/', (req, res) => {
    todoService
        .getAllList()
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.status(500);
            res.json(err);
        })
});


//GET: /api/todo/id
router.get('/:id', (req, res) => {
    todoService
        .getById(req.params.id)
        .then((data)=>{            
            res.json(data);
        })
        .catch((err)=>{
            res.status(500);
            res.json(err);
        })
});



//POST: /api/todo/
router.post('/', (req, res) => {
    todoService
        .createItem(req.body)
        .then((data)=>{
            res.json(data);
        })
        .catch((err=>{
            res.status(500);
            res.json(err);
        }))
});



//PUT: /api/todo/:id
router.put('/:id', (req, res) => {
    todoService
        .updateItem(req.params.id, req.body)
        .then((data)=>{
            res.json(data);
        })
        .catch((data)=>{
            res.status(500);
            res.json(err);
        })
});



//DELETE: /api/todo/:id
router.delete('/:id', (req, res) => {
    todoService
   .deleteItem(req.params.id)
   .then((data)=>{
       res.json(data);
   })
   .catch((data)=>{
       res.status(500);
       res.json(err);
   })
});

module.exports =  router;