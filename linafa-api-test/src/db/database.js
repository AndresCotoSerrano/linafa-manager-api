const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

<<<<<<< HEAD
    host: 'localhost',
    user: 'root',
    password: 'diegovrz',
    database: 'linafa_managerDB'
=======
    host: 'db4free.net',
    user: 'linfmanusr',
    password: 'Ngsk2019',
    database: 'linmgndb'
>>>>>>> fe12d3d9f7a2bc01422d27ec979e73407b8ffe1d
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