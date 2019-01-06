const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/login', (req, res) => {
    let procedure = 'call login_access(?,?,?)'
    mysqlConnection.query(procedure, [req.user_name, req.password,''], (err, rows, fields) => {
        if(!err){
           res.json(rows[0]) 
        }else{
            console.log(err);
        }
    });
});