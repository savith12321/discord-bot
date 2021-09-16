const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders")
const fetch = require("node-fetch")
module.exports = {
    ...new SlashCommandBuilder().setName("quote").setDescription("pong lol"),
    run: async (client, interaction, args) => {
        function getQuote() {
            return fetch('https://zenquotes.io/api/random')
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    return "`" + data[0]["q"] + "` - by " + data[0]["a"]
                })
        }
        getQuote().then(quote => interaction.followUp({ content: `${quote}`, ephemeral: true }))
    }
};