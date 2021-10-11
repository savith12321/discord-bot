const OAuthClient = require('disco-oauth');
const config = require("./config.json")
const client = new OAuthClient(config.id, config.secret);

client.setRedirect(`${config.url}/auth`)
client.setScopes('identify', 'guilds')

module.exports = client;