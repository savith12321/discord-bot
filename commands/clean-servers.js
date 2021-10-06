const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clean-servers',
    cooldown: 0,
    description: '',
    async execute (message, args, client){
        if(!message.author.id == "856767606869458946") return message.reply(":warning: this is a owner only command")
        for(guild in client.guilds){
            console.log(guild.name)
        }
    }
}