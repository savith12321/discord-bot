const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'give',
    cooldown: 3,
    description: ';-;',
    async execute (message, args, client){
        if(!args[0]) return message.reply("worng usage of the command `lol give <ammount> <@user>`");
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(!Member) return message.reply("could not fetch that member.")
        profileSchema.findOne({ UserID: message.author.id }, async (err, data) =>{
            if(isNaN(args[0])) return message.reply("worng usage of the command `lol give <ammount> <@user>`");
            if(data.wollet < parseFloat(args[0])) return message.reply("you dont have that mush money on yor pocket go and withdraw some money.")
            data.wollet -= parseFloat(args[0])
            data.save();
            profileSchema.findOne({UserID: Member.user.id}, async (error, Member_data) =>{
                if(data){
                    Member_data.wollet += parseFloat(args[0])
                    Member_data.save();
                    message.reply("you gave " + Member.user.username + " **" + args[0] + "€**")
                }
                if(!data){
                    message.reply("that user is not on our db please tell him to atleast use our bot at once.")
                }
            });
        });
    }
}