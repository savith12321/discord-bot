const { MessageEmbed, MessageAttachment } = require('discord.js')
module.exports = {
    name: 'triggered',
    cooldown:1,
    description: "this is a ping command!",
    execute(message, args, client){
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let link = `https://some-random-api.ml/canvas/triggered/?avatar=${member.user.avatarURL({ format: 'png'})}`
        const attachment = new MessageAttachment(link, 'triggered.gif');
        const embed = new MessageEmbed()
          .setTitle(`triggered`)
          .attachFiles(attachment)
          .setColor("RANDOM")
          .setTimestamp()
          .setImage('attachment://triggered.gif')
        message.channel.send(embed);
    }
}
