const config = require('../config');
module.exports = {
    name: 'restart',
    description: "restart bots conection to discord api",
    async execute(message, args, client){
        let done = message.channel.send('Resetting...')
        bot.destroy()
        bot.login(botsettings.token);
        message.channel.send("Reloaded");
        return;

    }
}
