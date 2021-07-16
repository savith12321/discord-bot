const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'lyrics',
    cooldown:1,
    description: "sends iamspeed pic with crop by the messages aouthors pfp",
    execute(message, args){
        if(!args[0) return message.channel.send(`please type a name of a song!`)
        var quary = args.join("%20")
        var url = `https://some-random-api.ml/lyrics?title=${quary}`;
          
        var req = unirest("GET", url);

        req.query({
            "format": "json"
        });


        req.end(function(res) {
            if (res.error) throw new Error(res.error);
            var song = res.body;
            const userEmbed = new Discord.MessageEmbed()
            .setTitle(song.title)
            .setDescription(song.lyrics)
            .setAuthor(song.author)
            .setThumbnail(song.thumbnail.genius)
            .setURL(song.links.genius)
            .setTimestamp()
            .setColor("RANDOM");
            message.channel.send(userEmbed)

        });
        
    }
}
