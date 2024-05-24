const mongoose = require('mongoose');
const feedback = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    }

}, { timestamps: true })

module.exports = mongoose.model('Feedback', feedback);