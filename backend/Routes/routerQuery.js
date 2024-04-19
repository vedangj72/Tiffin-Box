const express = require('express');
const routerQuery = express.Router()
const { queryList, postQuery } = require('../Controllers/controllerQuery.js');

routerQuery.get('/home/query', queryList);

routerQuery.post('/home/query', postQuery)

module.exports = routerQuery;