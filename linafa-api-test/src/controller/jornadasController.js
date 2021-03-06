const mysqlConnection = require('../db/database');

module.exports = {
    insertJornadas: async (req, res) => {

        jornadas = req.body;
        console.log(jornadas[0].jornada_name);

        for (var i in jornadas) {

            let procedure = 'call jornada_creation(?,?,?,?,?,?,?,?)';
            mysqlConnection.query(procedure, [jornadas[i].p_round, jornadas[i].p_jornada_name,
            jornadas[i].p_region_name, jornadas[i].p_division_name, jornadas[i].p_group_name,
            jornadas[i].p_local_team_name, jornadas[i].p_visitant_team_name, i],
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



    insertJornadasTwo: async (req, res) => {

        jornadas = req.body;
        //  var pjornadas= JSON.parse(jornadas);
        console.log(jornadas[0].jornada_name);

        for (var i in jornadas) {

            let procedure = 'call jornada_creation(?,?,?,?,?,?,?,?)';
            mysqlConnection.query(procedure, [jornadas[i].round, jornadas[i].jornada_name,
            jornadas[i].region_name, jornadas[i].division_name, jornadas[i].group_name,
            jornadas[i].local_team_name, jornadas[i].visitant_team_name, i],
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
        const { id, jornada_name, jornada_number, region_name, division_name, group_name, round,
            jornada_date, place, match_hour, local_team_name, visitant_team_name, local_goals,
            visitant_goals, need_revision, published } = req.body;
        let procedure = 'call jornada_edit(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        mysqlConnection.query(procedure, [id, jornada_name, jornada_number, region_name, division_name, group_name, round,
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


    ranking: (req, res) => {
        const { region_name, division_name,
            local_team_name, visitant_team_name, local_goals,
            visitant_goals } = req.body;
        let procedure = 'call ranking(?,?,?,?,?,?)';
        mysqlConnection.query(procedure, [region_name, division_name,
            local_team_name, visitant_team_name, local_goals,
            visitant_goals],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },



    reverseRanking: (req, res) => {
        const { region_name, division_name,
            local_team_name, visitant_team_name, local_goals,
            visitant_goals } = req.body;
        let procedure = 'call reverse_ranking(?,?,?,?,?,?)';
        mysqlConnection.query(procedure, [region_name, division_name,
            local_team_name, visitant_team_name, local_goals,
            visitant_goals],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },


    jornadas_show_second_round: (req, res) => {
        const { region, division, grupo } = req.body;
        console.log(req.body)
        let procedure = 'call jornadas_show_second_round(?,?,?)';
        mysqlConnection.query(procedure, [region, division, grupo],
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


    showGeneralRanking: (req, res) => {
        const { region, division } = req.body;
        console.log(req.body)
        let procedure = 'call show_general_ranking(?,?)';
        mysqlConnection.query(procedure, [region, division],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },

    showRanking: (req, res) => {
        const { region, division, grupo } = req.body;
        console.log(req.body)
        let procedure = 'call show_ranking(?,?,?)';
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



    sendToRevision: (req, res) => {
        const { region, division, grupo } = req.body;
        console.log(req.body)
        let procedure = 'call send_to_revision(?,?,?)';
        mysqlConnection.query(procedure, [region, division, grupo],
            (err, rows, fields) => {
                if (!err) {
                    res.json(rows[0])
                } else {
                    console.log(err);
                }
            });
    },

    sentToPublish: (req, res) => {
        const { region, division, grupo } = req.body;
        console.log(req.body)
        let procedure = 'call send_to_publish(?,?,?)';
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