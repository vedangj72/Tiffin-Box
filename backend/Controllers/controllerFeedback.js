const mongoose = require('mongoose');
const Feedback = require('../Models/modelFeedback');
const addFeedback = async(req, res) => {
    try {
        const { name, phone, feedback } = req.body || {}
        if (!phone || !feedback) {
            return res.status(400).send("All field must be filled");
        }
        const newfeedback = await Feedback.create({ name, phone, feedback });
        res.status(200).send(newfeedback);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

const feedbackList = async(req, res) => {
    try {
        const allfeedback = await Feedback.find();
        res.status(200).send(allfeedback);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

module.exports = { addFeedback, feedbackList };