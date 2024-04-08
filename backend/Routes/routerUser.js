const express = require('express');
const routerUser = express.Router();
const { userAdd, userList } = require('../Controllers/controllerUsers');

routerUser.get('/home/user', userList);
routerUser.post('/home/user', userAdd);


module.exports = routerUser;