const express = require('express');
const router = express.Router();
const signup = require('../controller/user/signup.js')
const logutUser  = require('../controller/user/logout.js')

const adminProfile = require('../controller/admin/admin.js')

const userLogin  = require('../controller/user/login.js');
const logoutUser = require('../controller/user/logout.js');

const userProfile = require('../controller/user/userProfile.js')

const authenticateUser = require('../middleware/auth.middleware.js')

const authorizeRole = require('../middleware/role.middleware.js');


router.post('/user/signup',signup );
router.post('/user/login',userLogin );
router.put('/user/logout',logoutUser );
router.get('/user/userprofile',authenticateUser,userProfile );
router.get('/user/adminprofile',authenticateUser,authorizeRole("admin"),adminProfile );

module.exports = router


