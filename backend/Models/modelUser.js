const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    phone: {
        type: Number,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    sub: {
        type: Boolean,
        default: false,
        required: true,
    },
    payed: {
        type: Number,
    },
    datestart: {
        type: Date,
        required: true,
    },
    dateend: {
        type: Date,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);