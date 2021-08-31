module.exports = {
    name: "reverse",
    description: "Reverses the given text",
    async execute(message, args, client, discord, profileData) {
        const text = args.join(" ")
        if(!text) return message.reply("Please give something to reverse!")
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()
        let result = reverseArray.join("")
        message.channel.send(result)
    }
}

/*
sample string - hello
array - ['h','e','l','l','o']
reversed - ['o','l','l','e','h']
result - olleh
*/