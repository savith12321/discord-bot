const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
var unirest = require("unirest");
const fetch = require('node-fetch');
module.exports = {
    name: 'kola',
    description: "send a random kola pic",
    execute(message, args) {


        var req = unirest("GET", "https://some-random-api.ml/img/koala");

        req.query({
            "format": "json"
        });
        req.end(function(res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body.link);
            const userEmbed = new Discord.MessageEmbed()
            .setTitle("Kola")
            .setURL(res.body.link)
            .setColor("RANDOM")
            .setImage(res.body.link)
            .setTimestamp()
            message.channel.send(userEmbed)
        });

    }
}
