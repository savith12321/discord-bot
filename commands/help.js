const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args, guildprefix) {
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("help for heat")
            .setAuthor(`Prefix = ${guildprefix}`)
            .setThumbnail("https://images-ext-2.discordapp.net/external/j-T9ysRv3xW8x3rVo_E8bxIMBV6iPI7MdgUiSPA0fj8/https/cdn.discordapp.com/avatars/846615243673042954/42f23ce46c5e8a304e40bce34e119d32.webp")
            .setURL(`https://discord.com/oauth2/authorize?client_id=846615243673042954&scope=bot&permissions=8589934591`)
            .addField(`About:`, "`help` - sends our commands\n`info` - bot's info")
            .addField(`Misc:`, "`setwelcome` - set a welcome message\n`removewelcome` - remove welcome message\n`setprefix` - change your guild prefix\n`feedback` - send us a feedback\n`bug` - report a bug")
            .addField(`Fun:`, "`heaven <@user>` - create a image of a heaven\n`iamspeed <@user>` - create a image of a iamspeed\n`cat` - send a random image of cat\n`dog` - send a random image of a dog\n`quote`- send a random quote\n`rps` - play rock paper scissors\n`google` - Search on google!")
            .addField(`Moderation:`, "`user-info <@user>` - get <@user>'s info\n`clear <number 1-100>` - purge command!\n`kick <@user>` - kick someone!\n`ban <@user>`- ban someone!")
            .addField(`Memy:`, "`meme` - random meme\n`chuck-joke` - random chuck joke")
            .addField(`Ticket:`, "`ticket` - create a ticket")
            .setColor(colors[Math.floor(Math.random() * colors.length)])
        message.channel.send(helpEmbed);
    }
}
