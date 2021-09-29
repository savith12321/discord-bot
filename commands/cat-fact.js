const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require("axios");
module.exports = {
    name: 'cat-fact',
    cooldown: 3,
    description: 'send a random monkey image',
    async execute (message, args, client){
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        axios
            .get('https://api.monkedev.com/facts/cat')
            .then((res) => {
                console.log("RES:", res.data.fact)
                const cat = res.data.fact
                const embed = new MessageEmbed()
                    .setDescription(res.data.fact)
                    .setTimestamp()
                    .setColor(colors[Math.floor(Math.random() * colors.length)])
  
                message.channel.send({embeds:[embed]});
  
            })
  
    }
}