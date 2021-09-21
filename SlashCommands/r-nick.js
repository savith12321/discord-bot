const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const axios = require("axios");
module.exports = {
    ...new SlashCommandBuilder().setName("r-nick").setDescription("will get you a random nick name lol"),
    run: async (client, interaction, args) => {
        let url = `http://names.drycodes.com/1`;
        axios
            .get(url)
            .then((res) => {
                interaction.followUp("```"+res.data[0]+" is your new nick name```").catch((err) =>{ console.log(err)});
                interaction.member.setNickname(res.data[0]);
            });
        //interaction.followUp({ content: `lol`, ephemeral: true });
    }
};