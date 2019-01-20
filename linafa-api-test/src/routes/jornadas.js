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
    .post(jornadaController.uniqueJornada)
router.route('/jornadasReview')
    .post(jornadaController.jornadasReview)
module.exports = router
