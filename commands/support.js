module.exports = {
    name: 'support',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
        message.reply(`here is our support server click on the link and create a ticket for support (https://discord.gg/uJ3ThhyTvP)`);
    }
}
