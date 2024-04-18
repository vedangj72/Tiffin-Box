// Menu list Show
const mongoose = require('mongoose');
const Menu = require('../Models/modelMenu');
const menuList = async(req, res) => {
    try {
        const menu = await Menu.find();
        res.status(201).send(menu);
    } catch (error) {
        res.status(404).send('Error in fetching menu' + error);
        console.error(error);
    }
}

const menuAdd = async(req, res) => {
    try {
        const { description, sabji, sabjialternative } = req.body || {};
        const desp = await Menu.findOne({ description });
        if (desp) {
            return res.status(400).send('Add the Description');
        }
        const menu = await Menu.create({ description, sabji, sabjialternative });
        res.status(200).send(`menu created successfully ${menu}`);
    } catch (error) {
        res.status(401).send('Error creating menu' + error);
        console.log(error);
    }
}

module.exports = { menuAdd, menuList };