const express = require('express');
const todoService = require('../services/todoService');


const router = express.Router();

const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SALT = "ayush";

const verifyAccessToken =  function (jwtToken) {
    try{
        jwt.verify(jwtToken, ACCESS_TOKEN_SALT);
        return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
  }



//GET: /api/todos/
router.get('/',(req, res, next)=>{
    const token = req.get('authorization');

    if(verifyAccessToken(token)){
        next();
        return
    }
    res.status(401);
    res.end('Access Denied');

}, (req, res) => {
    
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


//GET: /api/todos/id
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



//POST: /api/todos/
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



//PUT: /api/todos/:id
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



//DELETE: /api/todos/:id
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