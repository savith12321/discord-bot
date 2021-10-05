const { contents } = require('cheerio/lib/api/traversing');

const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'support',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setLabel("Support Server")
            .setURL("https://discord.gg/uJ3ThhyTvP")
            .setStyle("LINK"),
        );
        message.reply({content:`here is our support server click on the button and create a ticket for support`, components:[row]});
    }
}
