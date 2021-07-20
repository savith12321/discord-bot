const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'dm',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        if(!message.author.id === "") return message.channel.send(":warning: This is a owner only command!");
        var msg = args.join(" ")
        var id = msg.split("|")[0]
        var user = client.users.cache.get(id);
        if(!user) return message.channel.send(":warning: could not fetch that user");
        user.send(msg.split("|")[1]);
    }
}
