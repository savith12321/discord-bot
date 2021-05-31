module.exports = async (_, client) => {
    var servers = await client.guilds.cache.size;
    var members = await client.users.cache.size;
    client.user.setActivity(`[lol help] | Watching ${servers} servers and ${members} users | v1.0`, { type: "LISTENING" });
    console.log(`bot is ready ${servers} ${members}`);
}