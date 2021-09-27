const {Intents} = Discord = require('discord.js');// add this after Intents.FLAGS.GUILD_MEMBERS l
const fs = require("fs");
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS] });
const config = require('./config');
module.exports = client;
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.slashCommands = new Discord.Collection();
const mongoose = require('mongoose');
const express = require("express")
const api = express();
["commnad_handler", "event_handler"].forEach(handler => {
    require(`./handlers/${handler}`)(Discord, client)
});
mongoose
    .connect(config.mongosrv, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected to mongo db")
        client.login(config.token).catch((err) =>{
            console.log(err)
        });
    }).catch((err) => {
        console.log(err);
    });
