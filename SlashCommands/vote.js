const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
    ...new SlashCommandBuilder().setName("vote").setDescription("vote for us ❣️"),
    run: async (client, interaction, args) => {
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel("Vote us on Top.gg")
            .setURL("https://top.gg/bot/874131652920614942/vote")
            .setStyle("LINK"),

            new Discord.MessageButton()
            .setLabel("Vote us on discordbotlist.com")
            .setStyle("LINK")
            .setURL("https://discordbotlist.com/bots/Water Bottle-5417/upvote"),

            new Discord.MessageButton()
            .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            .setLabel("probably not rick roll")
            .setStyle("LINK")

        );
        interaction.followUp({content: "❤️ hey you want to vote for us, thank you ❤️", components : [row]})
    }
};