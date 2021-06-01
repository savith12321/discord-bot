const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'info',
    cooldown:1,
    description: "this is a info command!",
    execute(message, args){
      colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
      const userEmbed = new Discord.MessageEmbed()
      .setTitle("About me")
      .addField("Made by:", "`supperN00b#8519`")
      .addField("Made in:", "`Sri Lanka`")
      .addField("Owners age:", "`13`")
      .setThumbnail("https://media.discordapp.net/attachments/834658912422592553/835052092766158899/Untitled_design_1.png")
      .setFooter("Thanx for adding our bot c:")
      .setTimestamp()
      .setColor(colors[Math.floor(Math.random() * colors.length)])

          message.channel.send(userEmbed)

    }
}
