module.exports = {
    name: 'ping',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}
