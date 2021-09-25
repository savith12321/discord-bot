const schema = require("../models/prefix-schema")
module.exports = {
    name: 'setprefix',
    cooldown:50,
    description: "this is changing the prefix belongs to the guild",
    execute(message, args) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply("you dont have perms to do that idiot");
        if (!args[0]) return message.reply("idiot mention a **NEW PREFIX**");
        schema.findOne({ guildId: message.guild.id }, async(err, data) => {
            if (data) {
                data.prefix = args[0];
                data.save();
            } else {
                new schema({
                    guildId: message.guild.id,
                    guildName: message.guild.name,
                    prefix: args[0],
                }).save();
            }
            message.reply(`new prefix has been set to **${args[0]}**`);
        })
    }
}
