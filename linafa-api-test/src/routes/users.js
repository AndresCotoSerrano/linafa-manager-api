const express = require('express');
const router = express.Router();


//connection who brings data
const mysqlConnection = require('../db/database');

//consulta
router.get('/', (req, res) => {

    mysqlConnection.query('call all_users()', (err, rows, fields) => {

        if (!err) {

            res.json(rows);
            console.log(rows);
        } else {

            console.log(err);
        }

    });
});

router.get('/:id', (req, res) => {

    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM user_programa WHERE id = ?', [id]
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                console.log(err);
            }

        });

});

router.post('/', (req, res) => {
const {id,user_name,pass_login,id_region,phone_number,id_programa,role} = req.body;
    const query = `
CALL addEditUsers(?, ?, ?, ?, ?, ?, ?);
`;

    mysqlConnection.query(query,[id,user_name,pass_login,id_region,phone_number,id_programa,role],(err,rows,fields)=>{
        if (!err) {
            res.json({status:'user saved'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;