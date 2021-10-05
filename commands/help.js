const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'help',
    cooldown: 1,
    description: "help command",
    async execute(message, args, client, guildprefix) {
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle("help for Water Bottle")
            .setAuthor(`Prefix = ${guildprefix}`)
            .setDescription("please select something from the drop down menu")
            .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
            .setColor(colors[Math.floor(Math.random() * colors.length)])
            const row = new Discord.MessageActionRow().addComponents(
                new Discord.MessageSelectMenu()
                .setCustomId("help-message-select-menu")
                .setPlaceholder("click here to see the commands")
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
                            label: 'Economy',
                            value: 'economy',
                            description: "this will show you bots economy commands",
                            emoji: '💰'
                        },
                        {
                            label: 'Memey',
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
            const row2 = new Discord.MessageActionRow().addComponents(
                new Discord.MessageButton()
                .setStyle("LINK")
                .setURL("https://discord.com/oauth2/authorize?client_id=874131652920614942&permissions=8589934591&scope=bot%20applications.commands")
                .setLabel("invite me")
                .setEmoji("📌"),

                new Discord.MessageButton()
                .setStyle("LINK")
                .setURL("https://discord.gg/uJ3ThhyTvP")
                .setLabel("support server")
                .setEmoji("📌"),
            )
        let edit_msg = await message.channel.send({embeds:[helpEmbed] , components : [row2, row]});

        let About = new Discord.MessageEmbed()
        .setTitle("ℹ️ About")
        .setDescription("`help` - sends our commands\n`info` - bot's info")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Misc = new Discord.MessageEmbed()
        .setTitle("🎈 Misc")
        .setDescription("`setwelcome` - set a welcome message\n`removewelcome` - remove welcome message\n`setprefix` - change your guild prefix\n`feedback` - send us a feedback\n`bug` - report a bug \n `support` - get bot support")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Fun = new Discord.MessageEmbed()
        .setTitle("🎪 Fun")
        .setDescription("`heaven <@user>` - create a image of a heaven\n`iamspeed <@user>` - create a image of a iamspeed\n `triggered <@user>` - send a triggerd image with a users avatar \n`quote`- send a random quote\n`rps` - play rock paper scissors\n `grave` - send's a grave image \n `wasted` - make a GTA wasted image \n `80s <@user>` - sends <@user>'s avatar in 1980 style \n`ascii <text>` - sends <text> in ascii style\n`gay <@user>` - sends <@user>'s avatar in gay style \n`gun <@user>` - sends a image that <@user> is holding a gun \n`invert <@user>` - sends the avatar of <@user> in inverted colors \n `pixelate <@user>` - pixelate <@user>'s avatar \n`lyrics <name of a song>` - send lyrics of a song! \n `binaryencode <text>` - encode a text to binary \n `binarydecode <binary code>` - decode binary to text \n `countdown <number>` - count down from `<number>` to 0 \n `reverse <string>` - reverce the string from back to front \n `coinflip` - return Head or Tail \n `covid <country>` - send <country>'s covid19 statistics \n `emojify <text>` - convert <text> to emoji \n `snake` - play snake!!")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Animals = new Discord.MessageEmbed()
        .setTitle("🐯 Animals")
        .setDescription("`cat` - send a random image of cat\n`dog` - send a random image of a dog\n`kangaroo` - return a random image of kangaroo \n `kola` - return a random image of kola \n `monkey` - send's a image of you \n `bird` - sends a image of a bird \n `cat-fact` - sends a fact about cats \n `dog-fact` - sends a fact about dogs \n `monkey-fact` - sends a fact about monkeys \n `panda-fact` - sends a fact about pandas \n `fox-fact` - sends facts about foxes \n `bird-fact` - sends facts about birds \n `koala-fact` - sends facts about koalas")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Social = new Discord.MessageEmbed()
        .setTitle("🌐 Social media")
        .setDescription("`google` - Search on google! \n `ytsearch` - search on youtube!")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Moderation = new Discord.MessageEmbed()
        .setTitle("🔨 Moderation")
        .setDescription("`user-info <@user>` - get <@user>'s info\n`clear <number 1-100>` - purge command!\n`kick <@user>` - kick someone!\n`ban <@user>`- ban someone!")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let meme = new Discord.MessageEmbed()
        .setTitle("😂 Memey")
        .setDescription("`meme` - random meme\n`chuck-joke` - random chuck joke \n `door <@user>` - sends a door meme image \n `delete <@user>` - sends a meme delete image \n `hitler <@user>` - sends a hitler meme image \n `egg <@user>` - sends egg meme image \n `wanted <@user>` - sens a wanted meme image \n `cancer <@user>` - sends a cancer meme image")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);
        
        let Ticket = new Discord.MessageEmbed()
        .setTitle("🎫 Ticket")
        .setDescription("`ticket` - create a ticket")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);

        let Economy = new Discord.MessageEmbed()
        .setTitle("💰 Economy")
        .setDescription("`work` - work and get some money \n `beg` - beg for money \n `with` - withdraw some money \n `dep` - deposite some money \n `bal` - check your balance \n `give <@user>` - give a user some money")
        .setThumbnail("https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&scope=bot%20applications.commands`)
        .setColor(colors[Math.floor(Math.random() * colors.length)]);


        const filter = (interaction) => interaction.isSelectMenu() && interaction.user.id == message.author.id && interaction.message.id == edit_msg.id ;

        const collecter = message.channel.createMessageComponentCollector({filter, time:'180000'})
        collecter.on("collect", async (collected) =>{
            const value = collected.values[0];
            if(value == 'about'){
                await edit_msg.edit({embeds: [About], components : [row]})
            }else if(value == 'misc'){
                await edit_msg.edit({embeds: [Misc], components : [row]})
            }else if(value == 'fun'){
                await edit_msg.edit({embeds: [Fun], components : [row]})
            }else if(value == 'animals'){
                await edit_msg.edit({embeds: [Animals], components : [row]})
            }else if(value == 'social'){
                await edit_msg.edit({embeds: [Social], components : [row]})
            }else if(value == 'mod'){
                await edit_msg.edit({embeds: [Moderation], components : [row]})
            }else if(value == 'meme'){
                await edit_msg.edit({embeds: [meme], components : [row]})
            }else if(value == 'ticket'){
                await edit_msg.edit({embeds: [Ticket], components : [row]})
            }else if(value == 'economy'){
                await edit_msg.edit({embeds: [Economy], components : [row]})
            }
            
            collected.deferUpdate();
        });
        collecter.on("end", () =>{
            edit_msg.edit({content:"this message has bean expired please type `lol help` for a new one", embeds:[], components : [row]})
        })
    }
}
