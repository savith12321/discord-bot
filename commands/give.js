const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'give',
    cooldown: 3,
    description: ';-;',
    async execute (message, args, client){
        if(!args[0]) return message.reply("please enter a ammont to give to some one")
        
    }
}