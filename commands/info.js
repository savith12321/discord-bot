const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'info',
    cooldown:1,
    description: "this is a info command!",
    execute(message, args, client){
      colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
      const userEmbed = new Discord.MessageEmbed()
      .setTitle("About Heat")
      .addField("Made by:", "superN00b#7400, Naman#7653, SniproGamer#1045")
      .addField("Server Count", `${client.guilds.cache.size}`, true)
      .addField("Member Count", `${client.users.cache.size}`, true)
      .addField("Ping", `${Math.round(client.ws.ping)}ms`, true)
      .addField("Latency", `${Date.now() - message.createdTimestamp}ms`, true)
      .setThumbnail("https://media.discordapp.net/attachments/834658912422592553/835052092766158899/Untitled_design_1.png")
      .setFooter("Thanx for adding our bot c:")
      .setTimestamp()
      .setColor(colors[Math.floor(Math.random() * colors.length)])

          message.channel.send({embeds:[userEmbed]})

    }
}
