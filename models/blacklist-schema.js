const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userID: String,
    reason: String,
});

module.exports = mongoose.model('blacklist', Schema);