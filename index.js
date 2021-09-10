const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
require('discord-buttons')(client);
const config = require('./config');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const mongoose = require('mongoose');
["commnad_handler", "event_handler"].forEach(handler => {
    require(`./handlers/${handler}`)(Discord, client)
})

var log_file_err=fs.createWriteStream('./error.log',{flags:'a'});  

process.on('TypeError', function(err) {
        log_file_err.write('Caught exception: '+err+"\n");
});
mongoose
    .connect(config.mongosrv, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected to mongo db")
        client.login(config.token);
    }).catch((err) => {
        console.log(err);
    });