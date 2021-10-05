const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'give',
    cooldown: 3,
    description: ';-;',
    async execute (message, args, client){
        if(!args[0]) return message.reply("worng usage of the command `lol give <ammount> <@user>`");
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        profileSchema.findOne({ UserID: message.author.id }, async (err, data) =>{
            if(isNaN(args[0])) return message.reply("worng usage of the command `lol give <ammount> <@user>`");
            if(data.wollet < args[0]) return message.reply("you dont have that mush money on yor pocket go and withdraw some money.")
            profileSchema.findOne({})
        });
    }
}