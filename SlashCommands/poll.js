/*
const title_and_body = args.join(" ").split('|');
       let pollEmbed = new Discord.MessageEmbed()
       .setTitle(title_and_body[0])
       .setDescription(title_and_body[1])
       .setTimestamp()
       .setColor("RANDOM");

       let reactionMessage = await message.channel.send({embeds : [pollEmbed]});
       await reactionMessage.react("👍");
       await reactionMessage.react("👎");
*/

const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
    ...new SlashCommandBuilder().setName("ping").setDescription("pong lol").addStringOption(option => option.setName("title").setDescription("Title of your poll").setRequired(true)).addStringOption(option => option.setName("description").setDescription("description of your poll").setRequired(true)),
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