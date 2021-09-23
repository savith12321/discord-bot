const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
    ...new SlashCommandBuilder().setName("wasted").setDescription("sends iamspeed pic with crop by the messages aouthors pfp").addUserOption(option => option.setName("user").setDescription("plaeace select a user").setRequired(true)),
    run: async (client, interaction, args) => {
        const user = interaction.options.getUser("user");
        let link = `https://some-random-api.ml/canvas/wasted?avatar=${user.displayAvatarURL({ format: "png" })}`
        const attachment = new MessageAttachment(link, 'triggered.gif');
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTimestamp()
          .setImage('attachment://triggered.gif')
        interaction.followUp({embeds:[embed], files: [attachment]});
    }
};