const prefixSchema = require('../../models/prefix-schema')
const unirest = require('unirest')
module.exports = async (Discord, client, guild) => {
    let found = 0;
    options = {
        maxAge : 0
    }
    var servers = await client.guilds.cache.size;
    var members = await client.users.cache.size;
    const channel = guild.channels.cache.find(channel => channel.type === 'text')
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
                        const userEmbed = new Discord.MessageEmbed()
                        userEmbed.setColor("RANDOM")
                        userEmbed.setTitle(`i joined a new server`)
                        userEmbed.addField(`server name:`, `${guild.name}`)
                        userEmbed.addField("guild id:", `${guild.id}`)
                        userEmbed.setTimestamp();
                        await channel.createInvite(options)
                        .then(invite => userEmbed.setURL(invite.url))
                        .catch(console.error);
                        owner = client.users.cache.get("801752135850655755");
                        owner2 = client.users.cache.get("832511674392510464");
                        owner.send(userEmbed);
                        owner2.send(userEmbed);
                        console.log(guild.name)
                        unirest
                        .post('https://discordbotlist.com/api/v1/bots/846615243673042954/stats/')
                        .headers({'Accept': 'application/json', "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6Ijg0NjYxNTI0MzY3MzA0Mjk1NCIsImlhdCI6MTYyNjUxMDYxN30.6wB5lry4QuI2jDFbtfusL94-N8FRUMoAUWfASOqB9as"})
                        .send({ "guilds": servers, "users":  members})
                        .then((response) => {
                             console.log(response.body)
                        });
                        found = 1;
                    }
                }
            }
        }
}
