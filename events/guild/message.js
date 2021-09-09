const commnad_handler = require('../../handlers/commnad_handler');
const cooldowns = new Map();
const prefixSchema = require('../../models/prefix-schema')
const profileSchema = require('../../models/profile-schema');
const chatbotSchema = require('../../models/chatbot-schema')
var axios = require("axios").default;
module.exports = async (Discord, client, message) => {
    await prefixSchema.findOne({ guildId: message.guild.id }, async(err, data) => {
        let profileData;
        try {
          profileData = await profileSchema.findOne({ userID: message.author.id });
          if (!profileData) {
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
        if (!data) {
            await new prefixSchema({
                guildId: message.guild.id,
                guildName: message.guild.name,
                prefix: "lol "
            }).save();
            message.channel.send("setting you a prefix pls type `lol help` for help!");
        }else{
            guildprefix = data.prefix;
            if (message.guild == null) guildprefix = "lol ";
            if (!message.content.toLowerCase().startsWith(guildprefix) || message.author.bot) return;
            const args = message.content.slice(guildprefix.length).split(/ +/);
            const cmd = args.shift().toLowerCase();


            const command = client.commands.get(cmd);

            if(message.author.id == "801752135850655755"){
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

                    return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name} command (if command cooldowns are too long please feedback me with 'lol feedback <content>')`);
                }
            }
            time_stamps.set(message.author.id, current_time);
            setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
            if(command) command.execute(message, args, client, guildprefix);
        }
    });

}
