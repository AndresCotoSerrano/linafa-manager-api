const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

    host: '192.168.100.6',
    user: 'root',
    password: 'diegovrz',
    database: 'linafa_managerDB'
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