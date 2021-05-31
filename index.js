const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const config = require('./config');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const mongoose = require('mongoose');
["commnad_handler","event_handler"].forEach(handler =>{
    require(`./handlers/${handler}`)(Discord, client)
})
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