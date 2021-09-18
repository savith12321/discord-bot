const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
    ...new SlashCommandBuilder().setName("rickroll").setDescription("rick roll some one lol").addUserOption(option => option.setName("user").setDescription("user you want to rick roll").setRequired(true)),
    run: async (client, interaction, args) => {
        const user  = interaction.options.getUser("user");
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setURL("https://unimportantrosystruct.savithsavith.repl.co/")
            .setLabel("something not sus")
            .setStyle("LINK")

        );
        user.send({content: `hey, \n ${interaction.member.user} sent you probebly something not sus. click on that button to check it out`, components:[row]})
        interaction.followUp({ content: `rick roll bait sent to ${user}`, ephemeral: true });
    }
};