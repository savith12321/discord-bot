const Discord = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
    ...new SlashCommandBuilder().setName("poll").setDescription("create a poll :o").addStringOption(option => option.setName("title").setDescription("set a title for your poll").setRequired(true)).addStringOption(option => option.setName("description").setDescription("set a description for your poll").setRequired(true)),
    run: async (client, interaction, args) => {
        let pollEmbed = new Discord.MessageEmbed()
        .setTitle(interaction.options.getString("title"))
        .setDescription(interaction.options.getString("description"))
        .setTimestamp()
        .setColor("RANDOM")
        let msg = await interaction.channel.send({ embeds:[pollEmbed]});
        interaction.followUp("poll created")
        await msg.react("👍️");
        await msg.react("👎️");
    }
};