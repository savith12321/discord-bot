var unirest = require("unirest");
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'robot',
    cooldown: 10,
    description: "this is a robot command!",
    execute(message, args, client) {
        var req = unirest("GET", "https://robohash.p.rapidapi.com/index.php");

        req.query({
            "text": "mashape"
        });

        req.headers({
            "x-rapidapi-key": "3bf5242cbcmshb9d36e4c02b7119p113cb8jsn1dce95748840",
            "x-rapidapi-host": "robohash.p.rapidapi.com",
            "useQueryString": true
        });


        req.end(function(res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body);
            const embed = new Discord.MessageEmbed()
                .setTitle(`beep boop beep boop ?`)
                .setColor(`RANDOM`)
                .setImage(res.body.imageUrl)
                .setURL(res.body.imageUrl);
            message.channle.send(embed);
        });

    }
}