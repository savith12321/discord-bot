const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'help',
    cooldown: 1,
    description: "help command",
    async execute(message, args, client, guildprefix) {
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("help for heat")
            .setAuthor(`Prefix = ${guildprefix}`)
            .setDescription("please select something from the drop down menu")
            .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
            .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
            .setColor(colors[Math.floor(Math.random() * colors.length)])
            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageSelectMenu()
                .setCustomId("help-message-select-menu")
                .setPlaceholder("please select something")
                .addOptions(
                    [
                        {
                            label: 'About',
                            value: 'about',
                            description: "this will show you bots About commands",
                            emoji: 'ℹ️'
                        },
                        {
                            label: 'Misc',
                            value: 'misc',
                            description: "this will show you bots Miscellaneous commands",
                            emoji: '🎈'
                        },
                        {
                            label: 'Fun',
                            value: 'fun',
                            description: "this will show you bots Fun commands",
                            emoji: '🎪'
                        },
                        {
                            label: 'Animals',
                            value: 'animals',
                            description: "this will show you bots animals commands",
                            emoji: '🐯'
                        },
                        {
                            label: 'Social media',
                            value: 'social',
                            description: "this will show you bots Social media commands",
                            emoji: '🌐'
                        },
                        {
                            label: 'Moderation',
                            value: 'mod',
                            description: "this will show you bots Moderation commands",
                            emoji: '🔨'
                        },
                        {
                            label: 'Memy',
                            value: 'meme',
                            description: "this will show you bots Meme commands",
                            emoji: '😂'
                        },
                        {
                            label: 'Ticket',
                            value: 'ticket',
                            description: "this will show you bots ticket commands",
                            emoji: '🎫'
                        },
                    ]
                )
            )
        let fire_reaction = await message.react("🔥");
        let edit_msg = message.reply({embeds:[helpEmbed] , components : [row]});

        let About = new Discord.MessageEmbed()
        .setTitle("ℹ️ About")
        .setDescription("`help` - sends our commands\n`info` - bot's info")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
        .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Misc = new Discord.MessageEmbed()
        .setTitle("🎈 Misc")
        .setDescription("`setwelcome` - set a welcome message\n`removewelcome` - remove welcome message\n`setprefix` - change your guild prefix\n`feedback` - send us a feedback\n`bug` - report a bug \n `support` - get bot support")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
        .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Fun = new Discord.MessageEmbed()
        .setTitle("🎪 Fun")
        .setDescription("`heaven <@user>` - create a image of a heaven\n`iamspeed <@user>` - create a image of a iamspeed\n `triggered <@user>` - send a triggerd image with a users avatar \n`quote`- send a random quote\n`rps` - play rock paper scissors\n `grave` - send's a grave image \n `wasted` - make a GTA wasted image \n `80s <@user>` - sends <@user>'s avatar in 1980 style \n`ascii <text>` - sends <text> in ascii style\n`gay <@user>` - sends <@user>'s avatar in gay style \n`gun <@user>` - sends a image that <@user> is holding a gun \n`invert <@user>` - sends the avatar of <@user> in inverted colors \n `pixelate <@user>` - pixelate <@user>'s avatar \n`lyrics <name of a song>` - send lyrics of a song! \n `binaryencode <text>` - encode a text to binary \n `binarydecode <binary code>` - decode binary to text \n `countdown <number>` - count down from `<number>` to 0 \n `reverse <string>` - reverce the string from back to front \n `coinflip` - return Head or Tail \n `covid <country>` - send <country>'s covid19 statistics")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
        .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Animals = new Discord.MessageEmbed()
        .setTitle("🐯 Animals")
        .setDescription("`cat` - send a random image of cat\n`dog` - send a random image of a dog\n`kangaroo` - return a random image of kangaroo \n `kola` - return a random image of kola")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
        .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Social = new Discord.MessageEmbed()
        .setTitle("🌐 Social media")
        .setDescription("`google` - Search on google! \n `ytsearch` - search on youtube!")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
        .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Moderation = new Discord.MessageEmbed()
        .setTitle("🔨 Moderation")
        .setDescription("`user-info <@user>` - get <@user>'s info\n`clear <number 1-100>` - purge command!\n`kick <@user>` - kick someone!\n`ban <@user>`- ban someone!")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
        .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let meme = new Discord.MessageEmbed()
        .setTitle("😂 Memy")
        .setDescription("`meme` - random meme\n`chuck-joke` - random chuck joke")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
        .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);
        
        let Ticket = new Discord.MessageEmbed()
        .setTitle("🎫 Ticket")
        .setDescription("`ticket` - create a ticket")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg")
        .setURL(`https://discord.com/oauth2/authorize?client_id=874131652920614942&scope=bot&permissions=8589934591`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);


        const filter = (interaction) => interaction.isSelectMenu() && interaction.user.id == message.author.id;

        const collecter = message.channel.createMessageComponentCollector({filter});

        collecter.on("collect", async (collected) =>{
            const value = collected.values[0];
            console.log(value)
        });
    }
}
