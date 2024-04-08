const express = require('express');
const routerUser = express.Router();
const { userAdd, userList, verifyUser } = require('../Controllers/controllerUsers');

routerUser.get('/home/user', userList);
routerUser.post('/home/user', userAdd);

routerUser.post('/home/user/login', verifyUser);
module.exports = routerUser;