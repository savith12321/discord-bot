const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'iamspeed',
    cooldown:1,
    description: "sends iamspeed pic with crop by the messages aouthors pfp",
    execute(message, args){
      const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
      const Embed = new Discord.MessageEmbed()
        .setColor(colors[Math.floor(Math.random() * colors.length)])
        .setImage(encodeURI(`https://vacefron.nl/api/iamspeed?user=${Member.user.displayAvatarURL({ format: "png" })}`))
        .setTimestamp();

      return message.channel.send(Embed);
    }
}
