const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
    ...new SlashCommandBuilder().setName("poll").setDescription("create a poll :o").addStringOption(option => option.setName("title").setDescription("Title of your poll").setRequired(true)).addStringOption(option => option.setName("description").setDescription("description of your poll").setRequired(true)),
    run: async (client, interaction, args) => {
       let pollEmbed = new Discord.MessageEmbed()
       .setTitle(interaction.options.getString("title"))
       .setDescription(interaction.options.getString("description"))
       .setTimestamp()
       .setColor("RANDOM");

       let reactionMessage = await interaction.followUp({embeds : [pollEmbed]});
       await reactionMessage.react("👍");
       await reactionMessage.react("👎");
    }
};