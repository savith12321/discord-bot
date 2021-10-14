const {Intents} = Discord = require('discord.js');// add this after Intents.FLAGS.GUILD_MEMBERS l
const fs = require("fs");
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS] });
const config = require('./config.json');

client.login(config.token);

module.exports = client;