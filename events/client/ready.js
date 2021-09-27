const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
 
module.exports = async (_, client) => {
    require('../../functions/logger')(_, client, 'Bot is online.');
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });

    var servers = await client.guilds.cache.size;
    var members = await client.users.cache.size;
    client.user.setActivity(`[lol help] | Watching ${servers} servers | v1.1`, { type: "LISTENING" });
    console.log(`bot is ready ${servers} ${members}`);
    //await client.application.commands.set([]);
    //await client.application.commands.set(arrayOfSlashCommands);
    await client.guilds.cache
    .get("882850079533309962")
    .commands.set(arrayOfSlashCommands);


}
