const config = require('../config');
module.exports = {
    name: 'restart',
    description: "restart bots conection to discord api",
    async execute(message, args, client){
        let done = message.channel.send('Resetting...')
        .then(message => client.destroy())
        .then(() => client.login(config.token))
        .then(() => await done.edit("Restarting hasbean done :)"))
    }
}
