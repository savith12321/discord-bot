const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clean-servers',
    cooldown: 0,
    description: '',
    async execute (message, args, client){
        if(!message.author.id == "856767606869458946") return message.reply(":warning: this is a owner only command")
        for(const guild of client.guilds.cache){
            console.log(guild[1].memberCount)
            if(guild[1].memberCount < 10){
                guild.leave();
                message.reply("fount a ileagal server and i leave it, server name :- " + guild[1].name)
            }else{
                message.reply("so far so good, server name :- " + guild[1].name)
            }
        }
    }
}