const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const { MessageButton } = require('discord-buttons');
module.exports = {
    name: 'grave',
    cooldown: 1,
    description: "sends grave pic with crop by the messages aouthors pfp",
    async execute(message, args) {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        const Embed = new Discord.MessageEmbed()
        Embed.setColor(colors[Math.floor(Math.random() * colors.length)])
        Embed.setImage(encodeURI(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL({ format: "png" })}`))
        Embed.setTimestamp();


        const button = new MessageButton()
        button.setLabel("to open image click me")
        button.setID("grave_button")
        button.setURL(encodeURI(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL({ format: "png" })}`))

        await message.channel.send(`hi`, button);
    }
}