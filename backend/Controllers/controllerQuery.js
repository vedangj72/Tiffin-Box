const mongoose = require('mongoose');
const Query = require('../Models/modelQuery.js');

const postQuery = async(req, res) => {
    try {
        const { exceed, name, phone, reason } = req.body || {};
        if (exceed >= 5) {
            const newquery = await Query.create({ exceed, name, phone, reason });
            res.status(200).send(`Query created successfully ${newquery}`);
        } else {
            res.status(404).send("The days must be greater than or equal to 5");
        }
    } catch (error) {
        console.log(`Error in postQuery: ${error}`);
        res.status(400).send(error);
    }
};

const queryList = async(req, res) => {
    try {
        const allquery = await Query.find();
        res.status(200).send(allquery);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
const queryDelete = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedQuery = await Query.findByIdAndDelete(id);

        if (!deletedQuery) {
            return res.status(404).send("Query not found");
        }

        res.status(200).send("Query deleted successfully");
    } catch (error) {
        console.log(`Error in queryDelete: ${error}`);
        res.status(400).send(error);
    }
};

module.exports = { queryList, postQuery, queryDelete };