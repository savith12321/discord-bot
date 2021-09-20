const Discord = require('discord.js')
module.exports = {
    name: 'poll',
    cooldown:10,
    description: "this is a ping command!",
    async execute(message, args, client){
       if(!args) return message.reply("poll can be null");
       const title_and_body = args.join(" ").split('|');
       let pollEmbed = new Discord.MessageEmbed()
       .setTitle(title_and_body[0])
       .setDescription(title_and_body[1])
       .setTimestamp()
       .setColor("RANDOM");

       let reactionMessage = await message.channel.send({embeds : [pollEmbed]});
       await reactionMessage.react("👍");
       await reactionMessage.react("👎");//lol
    }
}
