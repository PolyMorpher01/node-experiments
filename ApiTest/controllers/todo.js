const express = require('express');
const router = express.Router();

let todos = [{
    id: 1,
    task: "clean"
},
    {
        id: 2,
        task: "shopping"
    }
];



//GET: /api/todo/list
router.get('/list', (req, res) => {
    res.end(todos);
});



//POST: /api/todo/addItem
router.post('/addItem', (req, res) => {
    console.log(req.body.name);
    res.json(req.body);
});



//PUT: /api/todo/:id
router.put('/:id', (req, res) => {
    console.log(req.body.name);
    res.json(req.body);
});



//DELETE: /api/todo/:id
router.delete('/:id', (req, res) => {
    console.log(req.body.name);
    res.json(req.body);
});

module.exports =  router;