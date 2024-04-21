const express = require('express');
const routerQuery = express.Router()
const { queryList, postQuery, queryDelete } = require('../Controllers/controllerQuery.js');

routerQuery.get('/home/query', queryList);

routerQuery.post('/home/query', postQuery);

routerQuery.delete('/home/query/:id', queryDelete);

module.exports = routerQuery;