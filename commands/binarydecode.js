const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
var unirest = require("unirest");
const fetch = require('node-fetch');
module.exports = {
    name: 'binarydecode',
    cooldown:10,
    description: "decode a binary to text",
    execute(message, args) {

        if(!args[0]) return message.reply("please enter a tex to decode");
        var url = `https://some-random-api.ml/binary?decode=${args.join("+")}`;
        var req = unirest("GET", url);

        req.query({
            "format": "json"
        });
        req.end(function(res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body.text);

            message.channel.send("```"+res.body.text+"```");
        });

    }
}
