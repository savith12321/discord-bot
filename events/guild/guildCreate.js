const prefixSchema = require('../../models/prefix-schema')
module.exports = async (Discord, client, guild) => {
    let found = 0;
    guild.channels.cache.map(async channel => {
        if (found === 0) {
            if (channel.type === "text") {
                if (channel.permissionsFor(client.user).has("VIEW_CHANNEL") === true) {
                    if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {
                        var embed = new Discord.MessageEmbed()
                        embed.setTitle(`Thank you for adding me!`)
                        embed.setColor("RANDOM")
                        embed.setImage(`https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg`)
                        embed.addField("Prefix", "`lol `")
                        channel.send(embed)
                        let invite = await channel.createInvite().catch(console.error);
                        const userEmbed = new Discord.MessageEmbed()
                        userEmbed.setColor("RANDOM")
                        userEmbed.setURL(invite)
                        userEmbed.setTitle(`i joined a new server`)
                        userEmbed.addField(`server name:`, `${guild.name}`)
                        userEmbed.addField("guild id:", `${guild.id}`)
                        userEmbed.setTimestamp()
                        owner = client.users.cache.get("801752135850655755");
                        owner.send(userEmbed);
                        prefixSchema.findOne({ guildId: guild.id }, async(err, data) => {
                          if(!data){
                            await new prefixSchema({
                                guildId: guild.id,
                                guildName: guild.name,
                                prefix: "lol ",
                            }).save();
                          }
                        });
                        console.log(guild.name)
                        found = 1;
                    }
                }
            }
        }
    });
}
