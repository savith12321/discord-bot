const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require("axios");
module.exports = {
    name: 'ascii',
    cooldown:10,
    description: "sends randome dog pics",
    execute(message, args) {
        let countury = args.join("%20");
        if (!args[0]) message.channel.send(":warning: quary can be null");
        let url = `https://artii.herokuapp.com/make?text=${countury}`;
        axios
            .get(url)
            .then((res) => {
                message.channel.send("```"+res.data+"```");
            })

    }
}
