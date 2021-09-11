const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    guildId: String,
    invite: String,
    ownerId:String,
    ownerTag:String
});

module.exports = mongoose.model('serverData', Schema);
