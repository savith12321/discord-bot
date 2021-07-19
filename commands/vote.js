const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'vote',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        const embed = new Discord.MessageEmbed();
        embed.addField("Vote us on Top.gg!", "[VOTE NOW!](https://top.gg/bot/846615243673042954/vote)");
        embed.addField("Vote us on discordbotlist.com","[VOTE NOW](https://discordbotlist.com/bots/heat/upvote)")
        embed.setColor("RANDOM")
        embed.setTitle("Vote For Heat :)")
        embed.setTimestamp();
        message.channel.send(embed)

    }
}
