const mongoose = require('mongoose');
const query = new mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: Number,
    },
    exceed: {
        type: Number,
    },
    reason: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('Query', query);