const express = require("express");
const app = express();
const Url = require('./configure.js');
const mongoose = require('mongoose');
require('dotenv').config();
const routerMenu = require('./Routes/routerMenu');
const port = process.env.PORT || 3000; // Default port 3000 if PORT environment variable is not set

mongoose.connect(Url)
    .then(() => {
        console.log('Connected to DB');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to DB:', err);
    });

app.use(express.json());
app.use('/', routerMenu);