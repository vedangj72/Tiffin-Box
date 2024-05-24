const mongoose = require('mongoose');
const Menu = require('../Models/modelMenu');

const menuList = async(req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).send(menu);
    } catch (error) {
        res.status(500).send('Error in fetching menu: ' + error);
        console.error(error);
    }
}

const menuAdd = async(req, res) => {
    try {
        const { description, sabji, sabjialternative } = req.body || {};
        const existingMenu = await Menu.findOne({ description });

        if (existingMenu) {
            return res.status(400).send('Menu with this description already exists');
        }

        const menu = await Menu.create({ description, sabji, sabjialternative });
        res.status(201).send(`Menu created successfully: ${menu}`);
    } catch (error) {
        res.status(500).send('Error creating menu: ' + error);
        console.error(error);
    }
}

const deleteOldMenuItems = async(req, res) => {
    try {
        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 3); // Subtract 1 day

        // Delete menu items older than one day
        await Menu.deleteMany({ createdAt: { $lt: oneDayAgo } });
        // console.log('Old menu items deleted successfully');
        const menu = await Menu.find();
        res.status(200).send(menu);
    } catch (error) {
        console.error('Error deleting old menu items:', error);
    }
}


setInterval(deleteOldMenuItems, 24 * 60 * 60 * 1000); // Run every 24 hours

module.exports = { menuAdd, menuList, deleteOldMenuItems };