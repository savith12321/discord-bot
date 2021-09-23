//betrayal
const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const  discordTogether = require("../Client/DiscordTogether");
module.exports = {
    ...new SlashCommandBuilder().setName("betrayal-together").setDescription("play betrayal whith your friends").addChannelOption(option => option.setName("voice").setDescription("what channel you want to watch play betrayal").setRequired(true)),
    run: async (client, interaction, args) => {
        const [channelID] = args;
        const channel = await client.channels.fetch(channelID).catch(() =>{});
        if(channel.type !== 'GUILD_VOICE') return interaction.followUp("please select a voice channel");
        discordTogether.createTogetherCode(channelID, 'betrayal').then((x) => interaction.followUp(x.code))
    }
};