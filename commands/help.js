const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args, guildprefix) {
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("help for heat")
            .setAuthor(`Prefix = ${guildprefix}`)
            .setThumbnail("https://media.discordapp.net/attachments/834658912422592553/835052092766158899/Untitled_design_1.png")
            .setURL(`https://discord.com/oauth2/authorize?client_id=804622611828047872&scope=bot&permissions=8589934591`)
            .addField(`About:`, "`help`|`info`")
            .addField(`Misc:`, "`setwelcome`|`removewelcome`|`setprefix`")
            .addField(`Fun:`, "`heaven`|`iamspeed`|`cat`|`dog`|`quote`")
            .addField(`Moderation:`, "`user-info`|`clear`|`kick`|`ban`")
            .addField(`Memy:`, "`meme`|`chuck-joke`")
            .addField(`Ticket:`, "`ticket`")
            .setColor(colors[Math.floor(Math.random() * colors.length)])
        message.channel.send(helpEmbed)
    }
}
