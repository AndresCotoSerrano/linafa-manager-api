const express = require('express');
const router = express.Router();
const jornadaController = require('../controller/jornadasController');

router.route('/insertJornadas')
    .post(jornadaController.insertJornadas);
router.route('/editarJornadas')
    .post(jornadaController.editJornadas);
router.route('/allJornadas')
    .post(jornadaController.showJornadas);
router.route('/unicaJornada')
    .post(jornadaController.uniqueJornada);
router.route('/jornadasReview')
    .post(jornadaController.showJornadas);
router.route('/jornadasSecondRound')
    .post(jornadaController.jornadas_show_second_round);
router.route('/insertJornadasTwo')
    .post(jornadaController.insertJornadasTwo);
router.route('/send_to_revision')
    .post(jornadaController.sendToRevision);
router.route('/send_to_publish')
    .post(jornadaController.sentToPublish);
router.route('/ranking')
    .post(jornadaController.ranking);   
router.route('/showRanking')
    .post(jornadaController.showRanking);   
   


module.exports = router
