const config = require('../config');
module.exports = {
    name: 'restart',
    description: "restart bots conection to discord api",
    async execute(message, args, client){
        let done = message.channel.send('Resetting...')
        client.destroy()
        client.login(config.token);
		const servers = await client.guilds.cache.size;
		const users = await client.users.cache.siz;
		client.user.setActivity(`[lol help] | Watching ${servers} servers | v1.0`, { type: "LISTENING" });
		console.log(`bot is ready ${servers} ${users}`);
        message.channel.send("Reloaded");
        return;

    }
}
