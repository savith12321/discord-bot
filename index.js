const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const config = require('./config');

const mongoose = require('mongoose');

const prefix = 'lol ';

const welcomeSchema = require('./models/welcome-schema')

const prefixSchema = require('./models/prefix-schema')

const { CanvasSenpai } = require("canvas-senpai")

const canva = new CanvasSenpai();

const fs = require('fs');
const { discriminators } = require('./models/prefix-schema');
const { EBADF, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

mongoose
    .connect(config.mongosrv, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected to mongo db")
        client.login(config.token);
    }).catch((err) => {
        console.log(err);
    });

client.once('ready', async() => {
    const servers = await client.guilds.cache.size;
    const users = await client.users.cache.siz;
    client.user.setActivity(`[lol help] | Watching ${servers} servers | v1.0`, { type: "LISTENING" });
    console.log(`bot is ready ${servers} ${users}`);
});
client.on('guildMemberAdd', async(member) => {
    console.log("member joined")
    await welcomeSchema.findOne({ guildId: member.guild.id }, async(err, data) => {
        if (!data) return;
        if (data.channelId === "") return;
        const user = member.user;
        const channel = member.guild.channels.cache.get(data.channelId);
        let welcomeimg = await canva.welcome(member, { link: "http://www.beach-backgrounds.com/wallpapers/view-from-the-hill-on-the-monaco-wallpaper-1920x600-461.jpg" })
        const userEmbed = new Discord.MessageEmbed()
            .setTitle(`Welcome ${user.username} to ${member.guild.name} the discord server`)
            .setThumbnail(`${user.displayAvatarURL()}`)
            .setColor("RANDOM")
            .addField(`About you`, `\n USER TAG: ${user} \n USER NO: ${member.guild.memberCount}`)
            .addField(`About us`, `\n SERVER NAME: ${member.guild.name} \n TOTAL MEMBERS WITH YOU: ${member.guild.memberCount}`)
        const attachment = new Discord.MessageAttachment(
            welcomeimg,
            "welcome-image.png"
        );
        channel.send(`Hey ${user} welcome to our server **${member.guild.name}** \n`);
        channel.send(userEmbed);
        channel.send(attachment);
    });
});

client.on('message', async message => {
    await prefixSchema.findOne({ guildId: message.guild.id }, async(err, data) => {
        if (!data) {
            await new prefixSchema({
                guildId: message.guild.id,
                guildName: message.guild.name,
                prefix: "lol ",
            }).save();
            message.channel.send("setting you a prefix pls type `lol help` for help!");
        } else {

            if (!message.content.startsWith(data.prefix) || message.author.bot) return;

            const args = message.content.slice(data.prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
            const guildprefix = data.prefix;

            if (command === 'ping') {
                client.commands.get('ping').execute(message, args, client);
            }
            if (command === 'meme') {
                client.commands.get('meme').execute(message, args);
            }
            if (command === 'quote') {
                client.commands.get('quote').execute(message, args);
            }
            if (command === 'help') {
                client.commands.get('help').execute(message, args, guildprefix);
            }
            if (command === 'user-info') {
                client.commands.get('user-info').execute(message, args);
            }
            if (command === 'chuck-joke') {
                client.commands.get('chuck-joke').execute(message, args);
            }
            if (command === 'cat') {
                client.commands.get('cat').execute(message, args);
            }
            if (command === 'dog') {
                client.commands.get('dog').execute(message, args);
            }
            if (command === 'iamspeed') {
                client.commands.get('iamspeed').execute(message, args);
            }
            if (command === 'heaven') {
                client.commands.get('heaven').execute(message, args);
            }
            if (command === 'clear') {
                client.commands.get('clear').execute(message, args);
            }
            if (command === 'kick') {
                client.commands.get('kick').execute(message, args);
            }
            if (command === 'ban') {
                client.commands.get('ban').execute(message, args);
            }
            if (command === 'info') {
                client.commands.get('info').execute(message, args);
            }
            if (command === 'ticket') {
                client.commands.get('ticket').execute(message, args, client);
            }
            if (command === 'setwelcome') {
                client.commands.get('setwelcome').execute(message, args, client);
            }
            if (command === 'removewelcome') {
                client.commands.get('removewelcome').execute(message, args, client);
            }
            if (command === 'setprefix') {
                client.commands.get('setprefix').execute(message, args);
            }
            if (command === 'feedback') {
                client.commands.get('feedback').execute(message, args, client)
            }
            if (command === 'rps') {
                client.commands.get('rps').execute(message, args, client)
            }
            if (command === 'bug') {
                client.commands.get('bug').execute(message, args, client)
            }
            if (command === 'google') {
                client.commands.get('google').execute(message, args, client)
            }
            if (command === 'panda-fact') {
                client.commands.get('panda-fact').execute(message, args)
            }
            if (command === 'kola') {
                client.commands.get('kola').execute(message, args)
            }
            if (command === 'binaryencode') {
                client.commands.get('binaryencode').execute(message, args)
            }
            if (command === 'binarydecode') {
                client.commands.get('binarydecode').execute(message, args)
            }
            if (command === 'restart') {
                client.commands.get('restart').execute(message, args, client)
            }
        }
    });

});
client.on("guildCreate", async guild => {
    let found = 0;
    guild.channels.cache.map(async channel => {
        if (found === 0) {
            if (channel.type === "text") {
                if (channel.permissionsFor(client.user).has("VIEW_CHANNEL") === true) {
                    if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {
                        var embed = new Discord.MessageEmbed()
                        embed.setTitle(`Thank you for adding me!`)
                        embed.setColor("RANDOM")
                        embed.setImage(`https://static.vecteezy.com/system/resources/previews/002/195/017/original/fire-flame-logo-icon-illustration-design-icon-free-vector.jpg`)
                        embed.addField("Prefix", "`lol `")
                        channel.send(embed)
                        const userEmbed = new Discord.MessageEmbed()
                        userEmbed.setColor("RANDOM")
                        userEmbed.setTitle(`i joined a new server`)
                        userEmbed.addField(`server name:`, `${guild.name}`)
                        userEmbed.addField("guild id:", `${guild.id}`)
                        userEmbed.setTimestamp()
                        owner = client.users.cache.get("801752135850655755");
                        owner.send(userEmbed);
                        prefixSchema.findOne({ guildId: guild.id }, async(err, data) => {
                          if(!data){
                            await new prefixSchema({
                                guildId: guild.id,
                                guildName: guild.name,
                                prefix: "lol ",
                            }).save();
                          }
                        });
                        console.log(guild.name)
                        found = 1;
                    }
                }
            }
        }
    });

})
