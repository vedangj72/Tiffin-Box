const express = require('express');
const routerMenu = express.Router();
const { menuAdd, menuList, deleteOldMenuItems } = require('../Controllers/contollerMenu');

routerMenu.get('/home/menu', deleteOldMenuItems);

routerMenu.post('/home/menu', menuAdd);

module.exports = routerMenu;