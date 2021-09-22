const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const  discordTogether = require("../Client/DiscordTogether");
module.exports = {
    ...new SlashCommandBuilder().setName("fishing-together").setDescription("play fishing.io whith your friends").addChannelOption(option => option.setName("voice").setDescription("what channel you want to watch play fishing.io").setRequired(true)),
    run: async (client, interaction, args) => {
        const [channelID] = args;
        const channel = await client.channels.fetch(channelID).catch(() =>{});
        if(channel.type !== 'GUILD_VOICE') return interaction.followUp("please select a voice channel");
        discordTogether.createTogetherCode(channelID, 'fishing').then((x) => interaction.followUp(x.code))
    }
};