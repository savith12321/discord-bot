var unirest = require("unirest");
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'ping',
    cooldown: 10,
    description: "this is a ping command!",
    execute(message, args, client) {
        var req = unirest("GET", "https://robohash.p.rapidapi.com/index.php");

        req.query({
            "text": "mashape"
        });

        req.headers({
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
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
                .setUrl(res.body.imageUrl);
            message.channle.send(embed);
        });

    }
}