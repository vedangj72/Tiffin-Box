const mongoose = require('mongoose');
const query = new mongoose.Schema({

    exceed: {
        type: Number,
    }
})

module.exports = mongoose.model('Query', query);