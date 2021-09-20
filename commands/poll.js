const Discord = require('discord.js')
module.exports = {
    name: 'poll',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
       if(!args) return message.reply("poll can be null");
       const title_and_body = args.split('|').catch((err) => {message.reply("pls devide you poll title and body with a `|` example `lol poll title gose here|the body gose here`")});
       let pollEmbed = new Discord.MessageEmbed()
       .setTitle(title_and_body[0])
       .setDescription(title_and_body[1])
       .setTimestamp()
       .setColor("RANDOM");

       let reactionMessage = message.channel.send({embeds : [pollEmbed]});
       reactionMessage.react("👍️");
       reactionMessage.react("👎️");
    }
}
