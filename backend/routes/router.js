const express = require('express');
const router = express.Router();
const signup = require('../controller/user/signup.js')

router.post('/user/signup',signup );

module.exports = router


