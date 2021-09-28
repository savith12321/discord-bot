const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require("axios");
module.exports = {
    name: 'monkey',
    cooldown: 3,
    description: 'send a random monkey image',
    async execute (message, args, client){
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        axios
            .get('https://api.monkedev.com/attachments/monkey')
            .then((res) => {
                console.log("RES:", res.data.url)
                const cat = res.data.url
                const embed = new MessageEmbed()
                    .setTitle("sorry i mistakenly sent u a image of u")
                    .setImage(res.data.url)
                    .setTimestamp()
                    .setColor(colors[Math.floor(Math.random() * colors.length)])
                    .setFooter("For monkeys lovers only altho if ur a monkey")
  
                message.channel.send({embeds:[embed]});
  
            })
  
    }
}