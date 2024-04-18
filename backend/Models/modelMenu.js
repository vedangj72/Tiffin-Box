const mongoose = require('mongoose');
const menu = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    sabji: {
        type: String,
        required: true,
    },
    sabjialternative: {
        type: String,
    }
}, { timestamps: true });
const Menu = mongoose.model('Menu', menu);
module.exports = Menu;