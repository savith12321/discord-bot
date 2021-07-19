const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'vote',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        const embed = new Discord.MessageEmbed();
        embed.addField("Title here, no hyperlinks allowed", "Main text here, so you can put a hyperlink here [![Discord Bots](https://top.gg/api/widget/846615243673042954.svg)](https://top.gg/bot/846615243673042954)");
        message.channel.send(embed)

    }
}
