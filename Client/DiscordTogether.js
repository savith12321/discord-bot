const DiscordTogether = require('./discordtogether');
const client = require('../index')

const discordTogether = new DiscordTogether(client);

module.exports = discordTogether; 
