const express = require('express');

const todosController = require('./controllers/todo');



const router = express.Router();




router.get('/', (req, res) => {
    res.json({
        app: req.app.locals.title,
        apiVersion: req.app.locals.version
    });
});


router.use('/todo', todosController);

module.exports =  router;