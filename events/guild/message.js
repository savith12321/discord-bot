const commnad_handler = require('../../handlers/commnad_handler');
const prefixSchema = require('../../models/prefix-schema')
module.exports = async (Discord, client, message) => {
    await prefixSchema.findOne({ guildId: message.guild.id }, async(err, data) => {
        if (!data) {
            await new prefixSchema({
                guildId: message.guild.id,
                guildName: message.guild.name,
                prefix: "lol "
            }).save();
            message.channel.send("setting you a prefix pls type `lol help` for help!");
        }else{
            if (!message.content.startsWith(data.prefix) || message.author.bot) return;

            const args = message.content.slice(data.prefix.length).split(/ +/);
            const cmd = args.shift().toLowerCase();
            const guildprefix = data.prefix;

            const command = client.commands.get(cmd);
            if(command) command.execute(message, args, client, guildprefix);
        } 
    });

}