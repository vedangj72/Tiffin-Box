const express = require("express");
const app = express();
const Url = require('./configure.js');
const mongoose = require('mongoose');
require('dotenv').config();
const routerMenu = require('./Routes/routerMenu');
const routerUsers = require('./Routes/routerUser');
const routerFeedback = require('./Routes/routerFeedback');
const routerQuery = require('./Routes/routerQuery');
const port = process.env.PORT;
const cors = require('cors')

const corsoption = {
    origin: "*"
};

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
app.use(cors(corsoption));
app.use(express.json());
app.use('/', routerMenu);
app.use('/', routerUsers);
app.use('/', routerFeedback);
app.use('/', routerQuery);
app.use((req, res) => {
    res.status(404).send("error page please select right url ");
})