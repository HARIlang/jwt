const express = require('express');
const router = express.Router();
const signup = require('../controller/user/signup.js')
const logutUser  = require('../controller/user/logout.js')

const userLogin  = require('../controller/user/login.js');
const logoutUser = require('../controller/user/logout.js');

router.post('/user/signup',signup );
router.post('/user/login',userLogin );
router.put('/user/logout',logoutUser );

module.exports = router


