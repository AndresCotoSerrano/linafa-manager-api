const express = require('express');
const router = express.Router();
const teamController = require('../controller/teamController');

router.route('/addTeam')
.post(teamController.insertTeams);
router.route('/deleteTeam')
.post(teamController.deleteTeams);
router.route('/allTeams')
.post(teamController.allTeams);

module.exports = router