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
        await prefixSchema.findOne({ guildId: interaction.guild.id }, async(err, data) => {
            if (!data) {
                await new prefixSchema({
                    guildId: interaction.guild.id,
                    guildName: interaction.guild.name,
                    prefix: 'lol '
                }).save();
                interaction.followUp("setting you a prefix pls type `lol help` for help!");
            }else{
            let guildprefix = data.prefix;
            cmd.run(client, interaction, args, guildprefix);
            }
        });
    }
}