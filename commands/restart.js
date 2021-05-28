const config = require('../config');
module.exports = {
    name: 'restart',
    description: "restart bots conection to discord api",
    execute(message, args, client){
        channel.send('Resetting...')
        .then(msg => client.destroy())
        .then(() => client.login(config.token));
    }
}
