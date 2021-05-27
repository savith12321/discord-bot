const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    guildId: String,
    guildName: String,
    prefix: String,
});

module.exports = mongoose.model('prefixes', Schema);