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
      am_i_the_imposter = imposter[Math.floor(Math.random() * imposter.length
      const Embed = new Discord.MessageEmbed()
        .setColor()
        .setColor("RANDOM")
        .setImage(encodeURI(`https://vacefron.nl/api/ejected?name=${Member.user.username({ format: "png" })}&impostor=${am_i_the_imposter}&crewmate=${colors[Math.floor(Math.random() * colors.length)]}`))
        .setTimestamp();
      if(am_i_the_imposter){Embed.setTitle("YES")}
      else{Embed.setTitle("NO")}
      return message.channel.send(Embed);
    }
}
