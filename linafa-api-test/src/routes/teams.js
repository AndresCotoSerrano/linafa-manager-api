const express = require('express');
const router = express.Router();
const teamController = require('../controller/teamController');

router.route('/')
.post(teamController.insertTeams)
.delete(teamController.deleteTeams)

module.exports = router