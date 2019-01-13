const mysqlConnection = require('../db/database');

module.exports = {
    insertJornadas: (req,res) => {
        const {round,name_jornada,region,division,group_name,local_team,visitant_team} = req.body;
        let procedure = 'call jornada_creation(?,?,?,?,?,?,?)';
        mysqlConnection.query(procedure, [round,name_jornada,region,division,group_name,local_team,visitant_team],
            (err,rows,fields)=>{
                if(!err){
                    res.json(rows[0])
                }else{
                    console.log(err);
                }
            });
    }
}