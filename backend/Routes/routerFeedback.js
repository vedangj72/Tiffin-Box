const express = require('express');
const routerFeedback = express.Router();
const { addFeedback, feedbackList } = require('../Controllers/controllerFeedback');

routerFeedback.get('/home/feedback', feedbackList);

routerFeedback.post('/home/feedback', addFeedback);




module.exports = routerFeedback;