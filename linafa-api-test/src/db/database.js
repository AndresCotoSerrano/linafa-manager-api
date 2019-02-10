const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

    /*host: 'db4free.net',
    user: 'linfmanusr',
    password: 'Ngsk2019',
    database: 'linmgndb'*/

    host: 'localhost',
    user: 'root',
    password: 'diegovrz',
    database: 'linmgndb'


});
mysqlConnection.connect(function(err){

    if(err){
       console.log(err) 
       return;
    }
    else{
        console.log('the database was connected sucessfuly')
    }


});

module.exports= mysqlConnection;