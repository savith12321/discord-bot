const discord = require('discord.js')
module.exports = {
	name: "rps",
	description: "play a game of rock, paper and scissors",
	async execute(message, args, client, discord, profileData) {
	let embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("RPS GAME")
        .setAuthor(message.author.username, message.author.avatarURL())
	.setDescription("React to play!")
        .setFooter("Play Rock Paper Scissors with the bot!!!")
	.setTimestamp()
		let msg = await message.channel.send(embed);
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
                .setColor("GREEN")        		
                .setTitle("RESULT")
                .setAuthor(message.author.username, message.author.avatarURL())
        		.addField("Your choice", `${reaction.emoji.name}`)
        		.addField("My choice", `${me}`)
                .setFooter("OOOH! Did you win!?!")
                .setTimestamp()
			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.reply("**SAD! You lost!**");
            } else if (me === reaction.emoji.name) {
                return message.reply("**OMG! It's a tie!**");
            } else {
                return message.reply("**NICE! You won!**");
            }
        })
        .catch(collected => {
                message.reply('The game has been cancelled since you did not respond in time!');
            })
}
}
