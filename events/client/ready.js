module.exports = async (_, client) => {
    var servers = await client.guilds.cache.size;
    var members = await client.users.cache.size;
    client.user.setActivity(`[lol help] | Watching ${servers} servers and ${members} users | v1.0`, { type: "LISTENING" });
    console.log(`bot is ready ${servers} ${members}`);
    guilds.forEach(guild => {
    doopliss.guilds.cache.forEach(guild => {
         let channel = guild.channels.cache.last();
         createLink(channel,guild,message);
    });


    async function createLink(chan,guild,message) {
        let invite = await chan.createInvite().catch(console.error);
        try{
             message.channel.send(guild.name + '|' + invite);
         }catch (e) {
            message.channel.send(guild.name + '|' + 'no link available');
        }
    }

}
