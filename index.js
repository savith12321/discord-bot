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

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

mongoose
    .connect(config.mongosrv, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log("connected to mongo db")
    }).catch((err) => {
        console.log(err);
    });

client.once('ready', async() => {
    const servers = await client.guilds.cache.size;
    const users = await client.users.cache.siz;
    client.user.setActivity(`[lol help] | Watching ${servers} servers | v1.0`, { type: "LISTENING" });
    console.log('bot is ready');
});

client.on('message',  message => {
    prefixSchema.findOne({guildId: message.guild.id}, async (err, data) => {
        if(!data){
          new prefixSchema({
              guildId: message.guild.id,
              prefix: "lol ",
          }).save();
        }
        if(!data) return message.channel.send("setting you a prefix pls type `lol help` for help!")
        if(!data.prefix) return message.channel.send('unknown error occured' + err)
        if (!message.content.startsWith(data.prefix) || message.author.bot) return;

        const args = message.content.slice(data.prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        const guildprefix = data.prefix;

        if (command === 'ping') {
            client.commands.get('ping').execute(message, args);
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
        if(command === 'setwelcome'){
          client.commands.get('setwelcome').execute(message, args, client);
        }
        if(command === 'removewelcome'){
          client.commands.get('removewelcome').execute(message, args, client);
        }
        if(command === 'setprefix'){
          client.commands.get('setprefix').execute(message, args);
        }
        if(command === 'feedback'){
          client.commands.get('feedback').execute(message, args, client)
        }
    });

});
client.on('guildMemberAdd', async (member, guild) =>{
  welcomeSchema.findOne({ guildId:member.guild.id }, async (err, data) =>{
    if(!data) return;
    const user = member.user;
    const channel = member.guild.channels.cache.get(data.channelId);
    if(data.channelId === "") return;
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


  })
});

client.login(config.token);
