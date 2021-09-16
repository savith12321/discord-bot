const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const ytsr = require('ytsr');
module.exports = {
    ...new SlashCommandBuilder().setName("youtube").setDescription("search on youtube").addStringOption(option => option.setName("query").setDescription("what you want to search on youtube").setRequired(true)),
    run: async (client, interaction, args) => {
        const options = {
            safeSearch: true,
        }
        const query = interaction.options.getString("query")

        const res = await ytsr(query, options).catch(e =>{
            return interaction.followUp({ content: `sorry no resalts wer found :c`, ephemeral: true });
        });

        const video = res.items.filter(i => i.type == "video")[0];
        if(!video) return interaction.followUp({ content: `sorry no resalts wer found :c`, ephemeral: true });

        const embed = new Discord.MessageEmbed()
        .setTitle(video.title)
        .setImage(video.bestThumbnail.url)
        .setColor("RANDOM")
        .setDescription(`**${video.url}**`)
        .setAuthor(video.author.name)
        .addField("Views", video.views.toLocaleString(), true)
        .addField("Duration", video.duration, true)

        return interaction.followUp({embeds:[embed]});
    }
};