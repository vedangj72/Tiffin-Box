const express = require('express');
const routerMenu = express.Router();
const { menuAdd, menuList } = require('../Controllers/contollerMenu');

routerMenu.get('/home/menu', menuList);

routerMenu.post('/home/menu', menuAdd);

module.exports = routerMenu;