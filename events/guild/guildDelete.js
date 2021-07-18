const prefixSchema = require('../../models/prefix-schema')
const unirest = require('unirest')
module.exports = async (Discord, client, guild) => {
    var servers = await client.guilds.cache.size;
    var members = await client.users.cache.size;
    unirest
    .post('https://discordbotlist.com/api/v1/bots/846615243673042954/stats/')
    .headers({'Accept': 'application/json', "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6Ijg0NjYxNTI0MzY3MzA0Mjk1NCIsImlhdCI6MTYyNjUxMDYxN30.6wB5lry4QuI2jDFbtfusL94-N8FRUMoAUWfASOqB9as"})
    .send({ "guilds": servers, "users":  members})
    .then((response) => {
         console.log(response.body)
    });
    client.user.setActivity(`[lol help] | Watching ${servers} servers and ${members} users | v1.0`, { type: "LISTENING" });
    const userEmbed = new Discord.MessageEmbed()
    userEmbed.setColor("RANDOM")
    userEmbed.setTitle(`i got removed from a server`)
    userEmbed.addField(`server name:`, `${guild.name}`)
    userEmbed.addField("guild id:", `${guild.id}`)
    userEmbed.setTimestamp()
    owner = client.users.cache.get("801752135850655755");
    owner2 = client.users.cache.get("832511674392510464");
    owner.send(userEmbed);
    owner2.send(userEmbed);
}
