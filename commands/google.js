const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const request = require('node-superfetch')
module.exports = {
    name: 'google',
    description: "this is a google command!",
    async execute(message, args) {
        let googleKey = "AIzaSyD6DHpSNGd4AhWAMMORvwPFcIAJkU7i2cg";
        let cxs = "ab76980b4744d70ed";
        let query = args.join(" ");
        let result;

        if (!query) return message.reply("Please enter the query");

        href = await search(query);
        if (!href) return message.reply("Unknown Search");

        const embed = new Discord.MessageEmbed();
        embed.setTitle(href.title)
        embed.setDescription(href.snippet)
        embed.setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
        embed.setURL(href.link)
        embed.setColor("RANDOM")
        embed.setFooter("Powerd by google")
        embed.setTimestamp()

        return message.channel.send(embed);

        async function search(query) {

            const { body } = await request.get('https://www.googleapis.com/customsearch/v1').query({
                key: googleKey,
                cx: cxs,
                safe: "off",
                q: query
            });

            if (!body.items) return null;
            return body.items[0];

        }
    }
}