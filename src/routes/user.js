const express = require('express');


const { getUsers, createUser} = require('../controllers/user')


const router = express.Router();


router.post('/', createUser); //Create User



router.get('/', getUsers); //Users List


module.exports = router;
