const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

    /*host: 'db4free.net',
    user: 'linfmanusr',
    password: 'Ngsk2019',
    database: 'linmgndb'*/

    /* host: 'localhost',
     user: 'root',
     password: 'diegovrz',
     database: 'linmgndb'*/

    host: '23.229.196.67',
    user: 'linfmanusr',
    password: 'Ngsk2019',
    database: 'linmgndb',
    noAccessToProcedureBodies: true,
    tcpKeepAlive: true
});
mysqlConnection.connect(function (err) {

    if (err) {
        console.log(err)
        return;
    }
    else {
        console.log('the database was connected sucessfuly')
    }
});
setInterval(function () {
    mysqlConnection.query('SELECT 1');
    console.log('me mantengo vivo');
}, 30000);

module.exports = mysqlConnection;