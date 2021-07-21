const commnad_handler = require('../../handlers/commnad_handler');
const cooldowns = new Map();
const prefixSchema = require('../../models/prefix-schema')
const chatbotSchema = require('../../models/chatbot-schema')
  var axios = require("axios").default;
module.exports = async (Discord, client, message) => {

    await chatbotSchema.findOne({guildId: message.guild.id }, async(error, data) =>{
      if(data.isEnable == true){
        if(message.channel.id == data.channelId){
          if(message.author.bot) return;
          var options = {
            method: 'POST',
            url: 'https://robomatic-ai.p.rapidapi.com/api.php',
            headers: {
              'Accept':'application/json'
              'content-type': 'application/x-www-form-urlencoded',
              'x-rapidapi-key': '3bf5242cbcmshb9d36e4c02b7119p113cb8jsn1dce95748840',
              'x-rapidapi-host': 'robomatic-ai.p.rapidapi.com'
            },
            data: {
              key: 'RHMN5hnQ4wTYZBGCF3dfxzypt68rVP',
              cbid: '1',
              ChatSource: 'RapidAPI',
              SessionID: 'RapidAPI1',
              cbot: '1',
              op: 'in',
              in: message.content
            }
          };

          axios.request(options).then(function (response) {
          	console.log(response.data);
            message.channel.send(response.data.out)
          }).catch(function (error) {
          	console.error(error);
          });
        }
      }
    });
    await prefixSchema.findOne({ guildId: message.guild.id }, async(err, data) => {
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
