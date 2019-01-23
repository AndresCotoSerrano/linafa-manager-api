const mysqlConnnection = require('../db/database');
module.exports = {

    validaLogin: (req, res) => {
        const {user_name,pass_login} = req.body;
        console.log(user_name+" "+pass_login);
        let procedure = 'call login_access(?,?,?)'
        mysqlConnnection.query(procedure, [user_name,pass_login,''], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
                console.log(rows[0])
            } else {
              
               console.log('error')
            }
        });

        
    }
}