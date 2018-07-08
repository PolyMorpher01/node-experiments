const express = require('express');
const authService = require('../services/authService');


const router = express.Router();


//POST: /api/auth/
router.post('/', (req, res) => {
    authService
        .checkLogin(req.body)
        .then((data)=>{
            res.json(data);
        })
        .catch((err=>{
            res.status(500);
            res.json(err);
        }))
});


module.exports = router;