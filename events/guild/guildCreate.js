const prefixSchema = require('../../models/prefix-schema')
const serverdataSchema = require('../../models/serverdata-schema')
const unirest = require('unirest')
const { AutoPoster } = require('topgg-autoposter')
module.exports = async (Discord, client, guild) => {
    let found = 0;
    options = {
        maxAge : 0
    }//hello
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
                        embed.addField("PS:", "**The bot will make a invite in this server for devolopment purpose If it is a problem it is ok to remove the invite :)**")
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
                        await serverdataSchema.findOne({guildId: guild.id}, async (err, data) =>{
                            if(data){
                              data.membercount = guild.memberCount;
                              data.save();
                            }if(!data){
                                await new serverdataSchema({
                                    name:guild.name,
                                    guildId: guild.id,
                                    invite: invite.url,
                                    ownerId:guild.ownerID,
                                    region:guild.region,
                                    membercount:guild.memberCount,
                                }).save();
                            }
                        });
                        owner = client.users.cache.get("856767606869458946");
                        owner2 = client.users.cache.get("832511674392510464");
                        owner3 = client.users.cache.get("703837369979240450");
                        owner.send(userEmbed);
                        owner2.send(userEmbed);
                        owner3.send(userEmbed);
                        console.log(guild.name)
                        unirest
                        .post('https://discordbotlist.com/api/v1/bots/846615243673042954/stats/')
                        .headers({'Accept': 'application/json', "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6Ijg3NDEzMTY1MjkyMDYxNDk0MiIsImlhdCI6MTYzMDU2MDQ1MH0.OwEnTsKsMKkUIsnTrpFPP9VMYj-XI4uCh8dlUm2xhDc"})
                        .send({ "guilds": servers, "users":  members})
                        .then((response) => {
                             console.log(response.body)
                        });
                        //const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0NjYxNTI0MzY3MzA0Mjk1NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI2NjE3MTM4fQ.oXqIGdXYYSIQvt1HHrrLZI-eyFTPCYty_xKWCmWLlw4', client)
                        client.user.setActivity(`[lol help] | Watching ${servers} servers and ${members} users | v1.1`, { type: "LISTENING" });
                        console.log(guild);
                        found = 1;
                    }
                }
            }
        }
}
