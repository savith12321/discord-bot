const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const bug_data = require('../data/channels.json')
module.exports = {
    name: 'bug',
    description: "this is a bug command!",
    execute(message, args, client) {
        if (!args[0]) return message.reply("plsease set a discription of the bug");
        owner = client.users.cache.get("773827206383796236");
        message.channel.send('📤 bug has sent successfully, thanx for reporting the bug')
        const bug = args.join(" ")
        const userEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${message.author.username}#${message.author.discriminator} (${message.author.id})`, `${message.author.displayAvatarURL()}`)
            .setTitle(`New Bug`)
            .addField(`bug:`, `${bug}`)
            .addField("From:", `${message.guild.name} (${message.guild.id})`)
            .setTimestamp()

        client.channels.cache.get(bug_data.bug).send(userEmbed);
        owner.send(userEmbed);

    }
}