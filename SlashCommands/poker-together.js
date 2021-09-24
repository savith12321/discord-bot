const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const  discordTogether = require("../Client/DiscordTogether");
module.exports = {
    ...new SlashCommandBuilder().setName("poker-together").setDescription("play poker whith your friends").addChannelOption(option => option.setName("voice").setDescription("what channel you want to watch play poker").setRequired(true)),
    run: async (client, interaction, args) => {
        const [channelID] = args;
        const channel = await client.channels.fetch(channelID).catch(() =>{});
        if(channel.type !== 'GUILD_VOICE') return interaction.followUp("please select a voice channel");
        discordTogether.createTogetherCode(channelID, 'poker').then((x) => interaction.followUp(`[click here to play the activity on (${channel.name})](${x.code})`))
    }
};