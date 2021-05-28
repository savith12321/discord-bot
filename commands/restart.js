const config = require('../config');
module.exports = {
    name: 'restart',
    description: "restart bots conection to discord api",
    execute(message, args, client){
        message.channel.send('Resetting...')
        .then(message => client.destroy())
        .then(() => client.login(config.token));
    }
}
