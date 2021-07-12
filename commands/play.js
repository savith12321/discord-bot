const ytdl = require('ytdl-core-discord');
const ytsr = require('ytsr')
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'play',
    cooldown:3,
    description: "this is a ban command!",
    async execute(message, args){
      message.channel.send("This music command is under devolopment :musical_note:")
	const query = args.join(' ');
        if(!query) return message.reply(":warning: can not play a empty song!");
        if (message.member.voice.channel) {
		    const connection = await message.member.voice.channel.join();
	const res = await ytsr(query, options).catch(e =>{
            return message.reply('no results wer found :(');
        });

        const video = res.items.filter(i => i.type == "video")[0];
        if(!video) return message.reply("no results wer found :c")
            	async function play(connection, url) {
	            connection.play(await ytdl(url), { type: 'opus' });
            	}
           	 play(connection, video.url)
	    	}else {
            		return message.channel.send(":warning: you mst join to a voice channel to use this command");
		}
        }
    }
}
