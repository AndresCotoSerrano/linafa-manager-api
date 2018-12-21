const mysql = require('mysql');

connection = mysql.createConnection({
    host: '192.168.1.7',
    port: '3306',
    user: 'linafa_manager',
    password: 'manager_Proyect.1',
    database: 'linafa_managerdb'
});

let userModel = {};

userModel.getUsers = (callback) => {
    if (connection) {
        connection.query('select * from login',
            (err, row) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, row);
                }
            }
        )
    }
};
userModel.insertUser = (userData, callback) => {
    if (connection) {
        connection.query(
            'insert into login set ?', userData,
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, {
                        'insertId': rows.insertId
                    })
                }
            }
        );
    }
};

/*userModel.updateUser = (userData, callback) => {
    if(connection){
        const sql = 
    }
};*/
module.exports = userModel;