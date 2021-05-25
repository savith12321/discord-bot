const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'rps',
    description: "RPS",
    async execute(message, args) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle(`RPS`)
        embed.setColor("RANDOM")
        embed.setDescription(`react to play 🗻📄✂`)
        let msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("📄")
        await msg.react("✂")

        choise = ["🗻", "📄", "✂"]
        me = choise[Math.floor(Math.random() * choise.length)]
        const filter = (reaction, user) => {
            return ["🗻", "📄", "✂"].includes(reaction.emoji.name) && user.id == message.author.id;
        }

        msg.awaitReactions(filter, { max: 1, time: 6000, error: ["time"] }).then(
            async(collected) => {
                const reaction = collected.first();
                let result = new Discord.MessageEmbed();
                result.setTitle(`Result`)
                result.addField(`Your Choice`, `${reaction.emoji.name}`)
                result.addField(`Bots Choice`, `${me}`)
                result.setColor("RANDOM")
                await msg.edit(result)

                if ((me === "🗻" && reaction.emoji.name === "✂") ||
                    (me === "📄" && reaction.emoji.name === "🗻") ||
                    (me === "✂" && reaction.emoji.name === "📄")
                ) {
                    message.reply("You Lose :( try again");
                } else if (me === reaction.emoji.name) {
                    message.reply("It is a tie!");
                } else {
                    message.reply("You won!");
                }

            }
        )
    }
}
