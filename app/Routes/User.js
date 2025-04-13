const express = require('express');
const User = require('../controllers/user');

const router = express.Router();

router
    .get('/', User.GetAllUsers)
    .get('/:id', User.GetUserById)
    .get('/UserName/:id', User.GetUserByUsername)
    .get('/GemerById/:id', User.GetGamerById)
    .post('/login', User.Login)
    .post('/updateUserInformation/:id', User.UpdateUserInformations)

module.exports = router;