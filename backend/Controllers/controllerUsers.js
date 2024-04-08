const mongoose = require('mongoose');
const User = require('../Models/modelUser');

const userAdd = async(req, res) => {
    try {
        const { name, age, phone, college, address, sub, payed, dateend, datestart } = req.body || {};
        if (!phone || !sub || !payed || !datestart || !dateend) {
            return res.status(400).send('Please provide all required fields: phone, sub, payed, datestart, dateend');
        }

        // Check if the phone number already exists in the database
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).send('User with this phone number already exists');
        }

        const user = await User.create({ name, age, phone, college, address, sub, payed, dateend, datestart });
        res.status(200).send(`User created successfully: ${user}`);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const userList = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { userAdd, userList };