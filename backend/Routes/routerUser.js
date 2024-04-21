const express = require('express');
const routerUser = express.Router();
const { userAdd, userList, verifyUser, userUpdate, userDelete } = require('../Controllers/controllerUsers');

routerUser.get('/home/user', userList);
routerUser.post('/home/user', userAdd);
routerUser.post('/home/user/login', verifyUser);
routerUser.patch('/home/user/:id', userUpdate);
routerUser.delete('/home/user/:id', userDelete);
module.exports = routerUser;