const mysqlConnnection = require('../db/database');
module.exports = {

    validaLogin: (req, res) => {
        const {user_name,pass_login} = req.body;
        let procedure = 'call login_access(?,?,?)'
        mysqlConnnection.query(procedure, [user_name,pass_login,''], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
            } else {
               // res.json(rows[0]);
               console.log('error')
            }
        });
    }
}