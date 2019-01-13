const express = require('express');
const router = express.Router();
const jornadaController = require('../controller/jornadasController');

router.route('/')
.post(jornadaController.insertJornadas)

module.exports = router
