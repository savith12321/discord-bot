const prefixSchema = require('../../models/prefix-schema');
const serverdataSchema = require('../../models/serverdata-schema');
const unirest = require('unirest');
const { AutoPoster } = require('topgg-autoposter');
module.exports = async (Discord, client, guild) => {
    const channel = guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').find(x => x.position == 0);
    if(guild.memberCount < 10) return guild.leave() && channel.send("sorry u dont have enouf membes to add this bot")
    await serverdataSchema.findOne({ownerId: guild.ownerID}, async (err, data) =>{
        if(data){
            return guild.leave() && channel.send("some thing unodinary is going on here 🧨")
        }
    });
    let found = 0;
    options = {
        maxAge : 0
    }//hello    
    var embed = new Discord.MessageEmbed()
    embed.setTitle(`Thank you for adding me!`)
    embed.setColor('RANDOM')
    embed.setImage(`https://static.vecteezy.com/system/resources/previews/002/511/473/original/sports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg`)
    embed.addField('Prefix', '`lol `')
    embed.addField('PS:', '**The bot will make a invite in this server for devolopment purpose If it is a problem it is ok to remove the invite :)**')

    channel.send({embeds:[embed]}).catch(() => {});

    var servers = await client.guilds.cache.size;
    var members = await client.users.cache.size;

    const userEmbed = new Discord.MessageEmbed()
    userEmbed.setColor('RANDOM')
    userEmbed.setTitle(`i joined a new server`)
    userEmbed.addField(`server name:`, `${guild.name}`)
    userEmbed.addField('guild id:', `${guild.id}`)
    userEmbed.setTimestamp();
    let invite = await channel.createInvite(options)
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
    owner = await client.users.fetch('856767606869458946').catch(() => {});
    owner2 = await client.users.fetch('832511674392510464').catch(() => {});
    owner3 = await client.users.fetch('703837369979240450').catch(() => {});
    owner.send({embeds:[userEmbed]});
    owner2.send({embeds:[userEmbed]});
    owner3.send({embeds:[userEmbed]});
    console.log(guild.name)
    const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3NDEzMTY1MjkyMDYxNDk0MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjMxNDMyNzQ3fQ.YETmm8Gn_vtri1ocXvhKsN4eHn-7O5on7k73dMiPZws', client)
    client.user.setActivity(`[lol help] | Watching ${servers} servers | v1.1`, { type: 'LISTENING' });
    require('../../functions/logger')(Discord, client, `I joined a new server now i am on ${servers} servers 🔥`);
}
