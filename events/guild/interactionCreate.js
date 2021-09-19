const prefixSchema = require('../../models/prefix-schema');
module.exports = async (Discord, client, interaction) => {
    if (interaction.isCommand()) {
        await interaction.deferReply().catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        await prefixSchema.findOne({ guildId: message.guild.id }, async(err, data) => {
            if (!data) {
                await new prefixSchema({
                    guildId: message.guild.id,
                    guildName: message.guild.name,
                    prefix: 'lol '
                }).save();
                message.channel.send('setting you a prefix pls type `lol help` for help!');
            }
            let guildprefix = data.prefix;
            cmd.run(client, interaction, args, guildprefix);
        });
    }
}