const mysqlConnection = require('../db/database');

module.exports = {
    insertJornadas: (req, res) => {
        const { p_round, p_jornada_name, p_region_name, p_division_name, p_group_name
            , p_local_team_name, p_visitant_team_name } = req.body;
        let procedure = 'call jornada_creation(?,?,?,?,?,?,?)';
        mysqlConnection.query(procedure, [p_round, p_jornada_name, p_region_name, p_division_name
            , p_group_name, p_local_team_name, p_visitant_team_name],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },

    editJornadas: (req, res) => {
        const { p_id, p_jornada_name, p_region_name, p_division_name, p_group_name, p_round,
            p_jornada_date, p_place, p_match_hour, p_local_team_name, p_visitant_team_name, p_local_team_goals,
            p_visitant_team_goals, p_need_revision, p_published } = req.body;
        let procedure = 'call jornada_edit(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        mysqlConnection.query(procedure, [p_id, p_jornada_name, p_region_name, p_division_name, p_group_name, p_round,
            p_jornada_date, p_place, p_match_hour, p_local_team_name, p_visitant_team_name, p_local_team_goals,
            p_visitant_team_goals, p_need_revision, p_published],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },
    showJornadas: (req, res) => {
        const { p_region_name, p_division_name, p_group_name } = req.body;
        let procedure = 'call jornadas_show_round(?,?,?)';
        mysqlConnection.query(procedure, [p_region_name, p_division_name, p_group_name],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },


    uniqueJornada: (req, res) => {
        const { p_region_name, p_division_name, p_group_name } = req.body;
        let procedure = 'call jornada_near(?,?,?)';
        mysqlConnection.query(procedure, [p_region_name, p_division_name, p_group_name],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    }

}