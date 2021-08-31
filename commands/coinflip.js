const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip",
    description: "flips a coin!",
    async execute(message, args, client, discord, profileData) {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Coinflip!")
        .setAuthor(message.author.username, message.author.avatarURL())
        .setDescription(`You flipped a **${choice}**!`)
        .setFooter("You Flipped A Coin!!!")
        .setTimestamp()
        message.channel.send(embed)
    }
}