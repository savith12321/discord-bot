const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'dm',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        if(message.author.id == '801752135850655755'){
        console.log(message.author.id)
        var msg = args.join(" ")
        var id = msg.split("|")
        var user = client.users.cache.get(id[0]);
        if(!user) return message.channel.send(":warning: could not fetch that user");
        user.send(id[1]);
      }else{
        return message.channel.send(":warning: This is a owner only command!");
      }
    }
}
