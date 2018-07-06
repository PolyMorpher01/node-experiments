const express = require('express');

const todosController = require('./controllers/todo');



const router = express.Router();




router.get('/', (req, res) => {
    res.json({
        app:"todo App"
    });
});


router.use('/todo', todosController);

module.exports =  router;