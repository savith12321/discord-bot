//
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'am-i-sus',
    cooldown:1,
    description: "sends iamspeed pic with crop by the messages aouthors pfp",
    execute(message, args){
      const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      colors = ['blue','brown','cyan','darkgreen','lime','orange','pink','purple','red','white','yellow']
      imposter = ['true', 'false']
      const Embed = new Discord.MessageEmbed()
        .setColor()
        .setColor("RANDOM")
        .setImage(encodeURI(`https://vacefron.nl/api/ejected?name=${Member.user.displayAvatarURL({ format: "png" })}&impostor=${imposter[Math.floor(Math.random() * imposter.length)]}&crewmate=${colors[Math.floor(Math.random() * colors.length)]}`))
        .setTimestamp();

      return message.channel.send(Embed);
    }
}
