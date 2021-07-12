const ytdl = require('ytdl-core-discord');
const ytsr = require('ytsr')
const Discord = {
    Client,
    MessageEmbed,
    MessageAttachment
} = require('discord.js');
var servers = {

};
module.exports = {
    name: 'play',
    cooldown: 3,
    description: "this is a ban command!",
    async execute(message, args) {
        message.channel.send("This music command is under devolopment :musical_note:")
        const options = {
            safeSearch: true,
        }
        const query = args.join(' ');
        if (!query) return message.reply(":warning: can not play a empty song!");
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const res = await ytsr(query, options).catch(e => {
                return message.reply('no results wer found :(');
            });

            const video = res.items.filter(i => i.type == "video")[0];
            if (!video) return message.reply("no results wer found :c")
            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }
            var server = servers[message.guild.id];

            server.queue.push(video.url);
            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
            async function play(connection, url) {
                var server = servers[message.guild.id];

                connection.play(await ytdl(server.queue[0]), {
                    type: 'opus'
                });

                server.dispatcher.setVolume(0.2);

                server.queue.shift();

                server.dispatcher.on("end", function() {

                    if (server.queue[0]) play(connection, message);
                    else connection.disconnect();

                });
            }
            play(connection, video.url)
        } else {
            return message.channel.send(":warning: you mst join to a voice channel to use this command");

        }
    }
}
