const prefixSchema = require('../../models/prefix-schema')
const serverdataSchema = require('../../models/serverdata-schema')
const unirest = require('unirest')
const { AutoPoster } = require('topgg-autoposter')
module.exports = async (Discord, client, guild) => {
    var servers = await client.guilds.cache.size;
    var members = await client.users.cache.size;
    unirest
    .post('https://discordbotlist.com/api/v1/bots/874131652920614942/stats/')
    .headers({'Accept': 'application/json', "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6Ijg0NjYxNTI0MzY3MzA0Mjk1NCIsImlhdCI6MTYyNjUxMDYxN30.6wB5lry4QuI2jDFbtfusL94-N8FRUMoAUWfASOqB9as"})
    .send({ "guilds": servers, "users":  members})
    .then((response) => {
         console.log(response.body)
    });
    const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6Ijg3NDEzMTY1MjkyMDYxNDk0MiIsImlhdCI6MTYzMDU2MDQ1MH0.OwEnTsKsMKkUIsnTrpFPP9VMYj-XI4uCh8dlUm2xhDc', client)
    client.user.setActivity(`[lol help] | Watching ${servers} servers and ${members} users | v1.1`, { type: "LISTENING" });
    const userEmbed = new Discord.MessageEmbed()
    userEmbed.setColor("RANDOM")
    userEmbed.setTitle(`i got removed from a server`)
    userEmbed.addField(`server name:`, `${guild.name}`)
    userEmbed.addField("guild id:", `${guild.id}`)
    userEmbed.setTimestamp()
    serverdataSchema.findOne({guildId: guild.id}, async (err, data) =>{
        if(!data){

        }if(data){
            userEmbed.setURL(data.invite)
        }
    });
    owner = client.users.cache.get("856767606869458946");
    owner2 = client.users.cache.get("832511674392510464");
    owner3 = client.users.cache.get("703837369979240450");
    owner.send(userEmbed);
    owner2.send(userEmbed);
    owner3.send(userEmbed);
}
