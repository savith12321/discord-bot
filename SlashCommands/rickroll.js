const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
    ...new SlashCommandBuilder().setName("rickroll").setDescription("rick roll some one lol").addUserOption(option => option.setName("user").setDescription("user you want to rick roll").setRequired(true)),
    run: async (client, interaction, args) => {
        const user  = interaction.options.getString("user");

        interaction.followUp({ content: `rick roll bait sent to ${user}`, ephemeral: true });
    }
};