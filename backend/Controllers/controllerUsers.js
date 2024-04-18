const mongoose = require('mongoose');
const User = require('../Models/modelUser');

const userAdd = async(req, res) => {
    try {
        const { name, age, phone, college, address, sub, payed, dateend, datestart } = req.body || {};
        if (!phone || !sub || !payed || !datestart || !dateend) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields: phone, sub, payed, datestart, dateend' });
        }

        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User with this phone number already exists' });
        }

        const user = await User.create({ name, age, phone, college, address, sub, payed, dateend, datestart });
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const verifyUser = async(req, res) => {
    try {
        const { phone, name } = req.body || {};
        if (!phone || !name) {
            return res.status(400).json({ success: false, message: 'Please provide phone number and name for verification' });
        }

        const existingUser = await User.findOne({ phone, name });
        if (!existingUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, message: 'User verified successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const userList = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error in fetching data' });
    }
};

module.exports = { userAdd, userList, verifyUser };