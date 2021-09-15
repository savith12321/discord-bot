const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const feedback_data = require('../data/channels.json')
module.exports = {
    name: 'feedback',
    cooldown:5,
    description: 'this is a feedback command!',
    execute(message, args, client) {
        if (!args[0]) return message.reply('plsease set a discription of the feedback');
        owner = client.users.cache.get('856767606869458946');
        message.channel.send('📤 feedback has sent successfully, thanx for the feedback')
        const feedback = args.join(' ')
        const userEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`${message.author.username}#${message.author.discriminator} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
            .setTitle(`New Feedback`)
            .addField(`Feedback:`, `${feedback}`)
            .addField('From:', `${message.guild.name} (${message.guild.id})`)
            .setTimestamp()

        client.channels.cache.get(feedback_data.feedback).send({embeds:[userEmbed]});
        owner.send({embeds:[userEmbed]});

    }
}