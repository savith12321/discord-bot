const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'vote',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        const embed = new Discord.MessageEmbed();
        embed.addField("Vote us on Top.gg!", "[`VOTE NOW!`](https://top.gg/bot/874131652920614942/vote)");
        embed.addField("Vote us on discordbotlist.com","[`VOTE NOW!`](https://discordbotlist.com/bots/heat-5417/upvote)")
        embed.setColor("RANDOM")
        embed.setTitle("Vote For Heat :)")
        embed.setTimestamp();
        message.channel.send({embeds:[embed]})

    }
}
