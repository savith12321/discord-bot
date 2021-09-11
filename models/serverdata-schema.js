const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    name:String,
    guildId: String,
    invite: String,
    ownerId:String,
    ownerTag:String,
    region:String,
    membercount:String,
});

module.exports = mongoose.model('serverData', Schema);
