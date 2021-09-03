const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require("axios");
module.exports = {
    name: 'kangaroo',
    cooldown:10,
    description: "sends randome dog pics",
    execute(message, args) {
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        axios
            .get('https://some-random-api.ml/animal/kangaroo')
            .then((res) => {
                console.log("RES:", res.image)
                const cat = res.data[0].url
                const embed = new MessageEmbed()
                    .setTitle("kangaroo ?")
                    .setImage(res.data[0].image)
                    .setTimestamp()
                    .setColor(colors[Math.floor(Math.random() * colors.length)])
                    .setFooter("For kangaroo <3 only")

                message.channel.send(embed);

            })

    }
}
