//https://vacefron.nl/api/grave?user=https://cdn.discordapp.com/avatars/722417245640196126/a5b55ccf6045cd6e185b08ff1fdc493c.webp
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const { MessageButton } = require('discord-buttons');
module.exports = {
    name: 'grave',
    cooldown:1,
    description: "sends grave pic with crop by the messages aouthors pfp",
    execute(message, args){
      const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
      const Embed = new Discord.MessageEmbed()
        .setColor(colors[Math.floor(Math.random() * colors.length)])
        .setImage(encodeURI(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL({ format: "png" })}`))
        .setTimestamp();


    let button = new MessageButton()
    .setLabel("to ope image click me")
    .setID("grave_button")
    .setURL(encodeURI(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setColor("green")

      return message.channel.send(Embed, button);
    }
}

