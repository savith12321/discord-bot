const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    async exports (client, interaction, args)  {
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    }
};