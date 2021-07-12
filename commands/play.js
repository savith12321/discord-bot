const ytdl = require('ytdl-core-discord');
module.exports = {
    name: 'play',
    cooldown:3,
    description: "this is a ban command!",
    async execute(message, args){
      message.channel.send("This music command is under devolopment :musical_note:")
        if (message.member.voice.channel) {
		    const connection = await message.member.voice.channel.join();

            async function play(connection, url) {
	            connection.play(await ytdl(url), { type: 'opus' });
            }
            play(connection, "https://youtu.be/gseVQnm0nIo")
	    }else {
            return message.channel.send(":warning: you mst join to a voice channel to use this command");
        }
    }
}
