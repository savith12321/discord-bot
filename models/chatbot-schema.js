const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    guildId: String,
    channelId: String,
    isEnable: Boolean,
});

module.exports = mongoose.model('chatbot', Schema);
