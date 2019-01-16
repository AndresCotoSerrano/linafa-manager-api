const express = require('express');
const router = express.Router();
const jornadaController = require('../controller/jornadasController');

router.route('/')
.post(jornadaController.insertJornadas)
.post(jornadaController.editJornadas)
.get(jornadaController.showJornadas)
.get(jornadaController.uniqueJornada)
module.exports = router
