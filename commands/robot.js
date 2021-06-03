var unirest = require("unirest");
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'mchead',
    cooldown: 10,
    description: "this is a robot command!",
    execute(message, args, client) {
        if (!args[0]) return message.channel.send("please type a name of a minecraft playe :(");
        const embed = new Discord.MessageEmbed()
            .setTitle(`${args[0]} ? `)
            .setColor(`RANDOM`)
            .setImage(`https://www.mc-heads.net/avatar/${args[0]}`);
        message.channel.send(embed);
    }
}