const { Client, Message, MessageEmbed } = require('discord.js');
const Meme = require("memer-api")
const memer = new Meme('A0OrY8COhHj');
module.exports = {
    name: 'ipad',
    cooldown: 0,
    description: 'send a dor meme image',
    async execute (message, args, client){
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        memer.ipad(Member.user.displayAvatarURL({ format: "png" })).then(image => {
            // This gives you a 'Buffer', for Discord to create an attachment
            
            var attachment = new Discord.MessageAttachment(image, "youtube.png");
            message.channel.send({files:[attachment]})
        })
    }
}