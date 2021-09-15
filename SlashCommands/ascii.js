const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const axios = require("axios");
module.exports = {
    ...new SlashCommandBuilder().setName("asii").setDescription("send the in in ascii style.").addStringOption(options => options.setName("message").setDescription("the message that should be turned in to ascii style.").setRequired(true)),
    run: async (client, interaction, args) => {
        let countury1 = interaction.options.getString("message").split(" ");
        let countury = countury1.join('%20')
        let url = `https://artii.herokuapp.com/make?text=${countury}`;
        axios
            .get(url)
            .then((res) => {
                interaction.followUp("```"+res.data+"```").catch(() =>{});
            })
    }
};