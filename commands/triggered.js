const { MessageEmbed, MessageAttachment } = require('discord.js')
module.exports = {
    name: 'triggered',
    cooldown:1,
    description: "this is a ping command!",
    execute(message, args, client){

        let link = `https://some-random-api.ml/canvas/triggered/?avatar=${message.author.avatarURL({ format: 'png'})}`
        const attachment = new MessageAttachment(link, 'triggered.gif');
        const embed = new MessageEmbed()
          .setTitle(`triggered`)
          .attachFiles(attachment)
          .setColor("RANDOM")
          .setTimestamp()
          .setImage('attachment://triggered.gif')
        message.channel.send(embed);
    }
}
