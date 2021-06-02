const ytsr = require('ytsr')
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'ytsearch',
    cooldown:5,
    description: "this is a ytsearch command!",
    async execute(message, args, client){
        const query = args.join(' ');
        if(!query) return message.reply("query cant be empty");

        const res = await ytsr(query).catch(e =>{
            return message.reply('no results wer found :(');
        });

        const video = res.items.filter(i => i.type == "video")[0];
        if(!video) return message.reply("no results wer found :c")

        const embed = new Discord.MessageEmbed()
        .setTitle(video.title)
        .setImage(video.bestThumbnail.url)
        .setColor("RANDOM")
        .setDescription(`**${video.url}**`)
        .setAuthor(video.author.name)
        .addField("Views", video.views.toLocaleString(), true)
        .addField("Duration", video.duration, true)

        return message.channel.send(embed);
    }
}
