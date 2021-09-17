const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'vote',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel("Vote us on Top.gg")
            .setURL("https://top.gg/bot/874131652920614942/vote")
            .setStyle("LINK"),

            new Discord.MessageButton()
            .setLabel("Vote us on discordbotlist.com")
            .setStyle("LINK")
            .setURL("https://discordbotlist.com/bots/heat-5417/upvote"),

            new Discord.MessageButton()
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .setLabel("probably not rick roll")
            .setStyle("LINK")

        );
        message.channel.send({content: ":888314189616128000: hey you want to vote for us, thank you :888314189616128000:", components : [row]})

    }
}
