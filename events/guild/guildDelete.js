const prefixSchema = require('../../models/prefix-schema')
module.exports = async (Discord, client, guild) => {
    const userEmbed = new Discord.MessageEmbed()
    userEmbed.setColor("RANDOM")
    userEmbed.setTitle(`i got removed from a server`)
    userEmbed.addField(`server name:`, `${guild.name}`)
    userEmbed.addField("guild id:", `${guild.id}`)
    userEmbed.setTimestamp()
    owner = client.users.cache.get("801752135850655755");
    owner.send(userEmbed);
}