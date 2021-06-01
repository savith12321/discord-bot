const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
var unirest = require("unirest");
const fetch = require('node-fetch');
module.exports = {
    name: 'binaryencode',
    cooldown:10,
    description: "encode a text to binary",
    execute(message, args) {

        if(!args[0]) return message.reply("please enter a tex to encode");
        var url = `https://some-random-api.ml/binary?text=${args.join("+")}`;
        var req = unirest("GET", url);

        req.query({
            "format": "json"
        });
        req.end(function(res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body.binary);
            if((res.body.binary).length >= 2000) return message.reply("sorry your message is too big to encode :(")
            message.channel.send("```"+res.body.binary+"```");
        });

    }
}
