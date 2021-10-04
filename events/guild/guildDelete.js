const prefixSchema = require('../../models/prefix-schema')
const serverdataSchema = require('../../models/serverdata-schema')
const unirest = require('unirest')
const { AutoPoster } = require('topgg-autoposter')
module.exports = async (Discord, client, guild) => {
    var servers = await client.guilds.cache.size;
    var members = await client.users.cache.size;
    const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3NDEzMTY1MjkyMDYxNDk0MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjMxNDMyNzQ3fQ.YETmm8Gn_vtri1ocXvhKsN4eHn-7O5on7k73dMiPZws', client)
    client.user.setActivity(`[lol help] | Watching ${servers} servers | v1.1`, { type: 'LISTENING' });
    const userEmbed = new Discord.MessageEmbed()
    userEmbed.setColor('RANDOM')
    userEmbed.setTitle(`i got removed from a server`)
    userEmbed.addField(`server name:`, `${guild.name}`)
    userEmbed.addField('guild id:', `${guild.id}`)
    userEmbed.setTimestamp()
    var owner = await client.users.fetch('856767606869458946').catch(() => console.log("lollollllll"));
    var owner2 = await client.users.fetch('832511674392510464').catch(() => console.log("lollollllll"));
    var owner3 = await client.users.fetch('703837369979240450').catch(() => console.log("lollollllll"));
    owner.send({embeds: [userEmbed]});
    owner2.send({embeds: [userEmbed]});
    owner3.send({embeds: [userEmbed]});
    require('../../functions/logger')(Discord, client, `I got removed from a server now i am on ${servers} servers 🧨`);
}
