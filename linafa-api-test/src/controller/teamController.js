const mysqlConnection = require('../db/database')

module.exports = {
    insertTeams: (req, res) => {
        const {name_team,region,division,group} = req.body;
        let procedure = 'call add_teams(?,?,?,?)'
        mysqlConnection.query(procedure, [name_team,region,division,group], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                // res.json(rows[0]);
                console.log('error')
            }
        });
    },
    deleteTeams: (req, res) => {
        const {id} = req.body;
        console.log(id);
        let procedure = 'call delete_team(?)'
        mysqlConnection.query(procedure, [id], (err, rows, fields) => {
            if(!err){
                res.json(rows[0]);
            }else{
                res.json({
                    "msg":"equipo no existe"
                })
            }
        });
    },


    allTeams: (req, res) => {
        const {region,division,group} = req.body;
        console.log(division)
        let procedure = 'call all_teams(?,?,?)'
        mysqlConnection.query(procedure, [region,division,group], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
                console.log(rows[0])
            } else {
                // res.json(rows[0]);
                console.log('error')
            }
        });

        
    }


    
}