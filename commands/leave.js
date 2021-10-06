const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'leave',
    cooldown: 0,
    description: '',
    async execute (message, args, client){
        if(!message.author.id == "856767606869458946") return message.reply(":warning: this is a owner only command");
        if(!args[0]) return message.reply(":warning: quary cant be empty");
        const guild = await client.guilds.fetch(args[0]);
        if(guild == undefined) return message.reply(":warning: guild not found.");
        guild.leave();
        message.reply("sucsess fully left that server")
    }
}