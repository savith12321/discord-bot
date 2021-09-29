const commnad_handler = require('../../handlers/commnad_handler');
const cooldowns = new Map();
const prefixSchema = require('../../models/prefix-schema')
const blacklistSchema = require('../../models/blacklist-schema')
const profileSchema = require('../../models/profile-schema');
const chatbotSchema = require('../../models/chatbot-schema')
var axios = require('axios').default;
module.exports = async (Discord, client, message) => {
    //console.log('message');
    if(message.author.bot)return;
    //require('../../functions/logger')(Discord, client, `${message.author.username}#${message.author.discriminator} sent :- ${message.content} on ${message.guild.name}(${message.guild.id}) at ${message.channel}`);
    if (message.guild == null) return message.reply("sorry we spport guild commands for now.");
    await prefixSchema.findOne({ guildId: message.guild.id }, async(err, data) => {
        if (!data) {
            await new prefixSchema({
                guildId: message.guild.id,
                guildName: message.guild.name,
                prefix: 'lol '
            }).save();
            message.channel.send('setting you a prefix pls type `lol help` for help!');
        }else{
        let profileData;
        try {
          profileData = await profileSchema.findOne({ UserID: message.author.id });
          if (!profileData && message.author.bot == false) {
            let profile = await profileSchema.create({
              UserID: message.author.id,
              UserName: message.author.username,
              wollet: 500,
              bank: 0,
            });
            profile.save();
          }
        } catch (err) {
          console.log(err);
        }
        guildprefix = data.prefix;
        if (message.guild == null) guildprefix = 'lol ';
        //console.log(guildprefix)
        if (!message.content.toLowerCase().startsWith(guildprefix) || message.author.bot) return;
        const args = message.content.slice(guildprefix.length).split(/ +/);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.get(cmd);
        if(!command){
          return;
        }
        if(message.author.id == '801752135850655755'){
            if(command) command.execute(message, args, client, guildprefix);
            return;
        }
        
        if(!cooldowns.has(command.name)){
            cooldowns.set(command.name, new Discord.Collection());
        }

        const current_time = Date.now();
        const time_stamps = cooldowns.get(command.name);
        const cooldown_amount = (command.cooldown) * 1000;
        if(time_stamps.has(message.author.id) ){
            const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

            if(current_time < expiration_time){
                const time_left = (expiration_time - current_time) / 1000;

                return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name} command`)
                .then((msg) => {
                    setTimeout(() => msg.delete(), 7000);
                  })
                  .catch((err) => {
                    throw err;
                  });
            }
        }
        time_stamps.set(message.author.id, current_time);
        setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
        await blacklistSchema.findOne({ userID: message.author.id }, async(err, data) => {
            if(!data){
                if(command) command.execute(message, args, client, guildprefix)
            }else{
                message.reply('you have bean black listed because of ```' + data.reason + '``` and if you think this is a mistake pls contact `superN00b#7400`')
                .then((msg) => {
                    setTimeout(() => msg.delete(), 7000);
                    setTimeout(() => message.delete(), 3000);
                  })
                  .catch((err) => {
                    throw err;
                  });
            }
        });
      }
    });

}
