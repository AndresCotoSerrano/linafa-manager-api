const express = require('express');
const router = express.Router();
const logincontroller = require('../controller/loginController');



router.route('/')
.post(logincontroller.validaLogin)

module.exports = router