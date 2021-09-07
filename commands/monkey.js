const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require("axios");
module.exports = {
    name: 'monkey',
    cooldown:10,
    description: "sends randome cat pics",
    execute(message, args){
      colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
      axios
          .get('https://api.monkedev.com/attachments/monkey')
          .then((res) => {
              console.log("RES:", res.data[0].url)
              const cat = res.data[0].url
              const embed = new MessageEmbed()
                  .setTitle("Meaw")
                  .setImage(res.data.url)
                  .setTimestamp()
                  .setColor(colors[Math.floor(Math.random() * colors.length)])
                  .setFooter("For cat lovers only")

              message.channel.send(embed);

          })

    }
}
