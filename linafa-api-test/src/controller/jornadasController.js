const mysqlConnection = require('../db/database');

module.exports = {
    insertJornadas: async (req, res) => {

        jornadas = req.body;
        //  var pjornadas= JSON.parse(jornadas);
        //console.log(pjornadas);

        for (var i in jornadas) {

            let procedure = 'call jornada_creation(?,?,?,?,?,?,?)';
            mysqlConnection.query(procedure, [jornadas[i].p_round, jornadas[i].p_jornada_name,
            jornadas[i].p_region_name, jornadas[i].p_division_name, jornadas[i].p_group_name,
            jornadas[i].p_local_team_name, jornadas[i].p_visitant_team_name],
                (err, rows, fields) => {
                    if (!err) {
                        res.json(rows[0])
                    } else {
                        console.log(err);
                    }
                });



        }

        mysqlConnection.on('error', function (err) {
            console.log("[mysql error]", err);
        });


    },

    editJornadas: (req, res) => {
        const { id, jornada_name,jornada_number ,region_name, division_name, group_name, round,
            jornada_date, place, match_hour, local_team_name, visitant_team_name, local_goals,
            visitant_goals, need_revision, published } = req.body;
        let procedure = 'call jornada_edit(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        mysqlConnection.query(procedure, [id, jornada_name,jornada_number, region_name, division_name, group_name, round,
            jornada_date, place, match_hour, local_team_name, visitant_team_name, local_goals,
            visitant_goals, need_revision, published],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },
    showJornadas: (req, res) => {
        const { region, division, grupo } = req.body;
        console.log(req.body)
        let procedure = 'call jornadas_show_round(?,?,?)';
        mysqlConnection.query(procedure, [region, division, grupo],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },
    jornadasReview: (req, res) => {
        const { region, division, grupo } = req.body;
        console.log(req.body)
        let procedure = 'call jornadas_to_review(?,?,?)';
        mysqlConnection.query(procedure, [region, division, grupo],
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