const mysqlConnection = require('../db/database')

module.exports = {
    insertTeams: (req, res) => {
        const { name_team, id_region, id_division, id_group } = req.body;
        let procedure = 'call add_teams(?,?,?,?)'
        mysqlConnection.query(procedure, [name_team, id_region, id_division, id_group], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]);
            } else {
                // res.json(rows[0]);
                console.log('error')
            }
        });
    },
    deleteTeams: (req, res) => {
        const { p_name_team } = req.body;
        let procedure = 'call delete_team(?)'
        mysqlConnection.query(procedure, [p_name_team], (err, rows, fields) => {
            if(!err){
                res.json(rows[0]);
            }else{
                res.json({
                    "msg":"equipo no existe"
                })
            }
        });
    }
}