const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
const got = require('got');
module.exports = {
    ...new SlashCommandBuilder().setName("triggered").setDescription("creat a triggers image of a users avatar.").addUserOption(option => option.setName("user").setDescription("plaeace select a user").setRequired(true)),
    run: async (client, interaction, args) => {
        const user = interaction.options.getUser("user");
        let link = `https://some-random-api.ml/canvas/triggered/?avatar=${user.avatarURL({ format: 'png'})}`
        const attachment = new MessageAttachment(link, 'triggered.gif');
        const embed = new MessageEmbed()
          .setTitle(`triggered`)
          .setColor("RANDOM")
          .setTimestamp()
          .setImage('attachment://triggered.gif')
        interaction.followUp({embeds:[embed], files: [attachment]});
    }
};