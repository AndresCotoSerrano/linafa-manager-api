const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

    host: '23.229.196.67',
    user: 'linmandb',
    password: 'lnf2019',
    database: 'linafa_manager_db2'
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