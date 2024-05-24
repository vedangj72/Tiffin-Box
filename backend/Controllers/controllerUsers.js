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
const userById = async(req, res) => {
    try {
        const { id } = req.params;

        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid user ID' });
        }

        // Find the user by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const userUpdate = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, phone, datestart, dateend } = req.body;

        if (!id) {
            return res.status(400).json({ success: false, message: 'User ID is required for updating' });
        }

        const existingUser = await User.findById(id);
        if (!existingUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (name) existingUser.name = name;
        if (phone) existingUser.phone = phone;
        if (datestart) existingUser.datestart = datestart;
        if (dateend) existingUser.dateend = dateend;
        // if (sub) existingUser.sub = sub;

        const updatedUser = await existingUser.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};



const userDelete = async(req, res) => {
    try {
        const { id } = req.params;

        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid user ID' });
        }

        // Find and remove the user by ID
        const deletedUser = await User.findOneAndDelete({ _id: id });
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, message: 'User deleted successfully', data: deletedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


module.exports = { userAdd, userList, verifyUser, userUpdate, userDelete, userById };