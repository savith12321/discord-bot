const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/bilders")
module.exports = {
    ...new SlashCommandBuilder().setName("ping").setDescription("pong lol"),
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    }
};