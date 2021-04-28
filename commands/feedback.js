const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const feedback_data = require('../data/channels.json')
module.exports = {
    name: 'feedback',
    description: "this is a feedback command!",
    execute(message, args, client){
        if(!args[0]) return message.reply("plsease set a discription of the feedback");

        message.channel.send('📤 feedback has sent successfully, thanx for the feedback')

          const userEmbed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL()}`)
          .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id})`)
          .addField(`Feedback:`,`${args}`)
          .addField("From:", `${message.guild.name} (${message.guild.id})`)
          .setTimestamp()

        client.channels.cache.get(feedback_data.feedback).send(userEmbed)

    }
}
