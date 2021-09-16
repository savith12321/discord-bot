const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const axios = require("axios");
module.exports = {
    ...new SlashCommandBuilder().setName("cat").setDescription("sends a image of cute cat <3"),
    run: async (client, interaction, args) => {
        colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
        axios
            .get('https://api.thecatapi.com/v1/images/search')
            .then((res) => {
                console.log("RES:", res.data[0].url)
                const cat = res.data[0].url
                const embed = new MessageEmbed()
                    .setTitle("Meaw")
                    .setImage(res.data[0].url)
                    .setTimestamp()
                    .setColor(colors[Math.floor(Math.random() * colors.length)])
                    .setFooter("For cat lovers only")
  
                    interaction.followUp({embeds:[embed]});
  
            })
    }
};