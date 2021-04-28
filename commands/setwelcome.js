const schema = require("../models/welcome-schema")
module.exports = {
    name: 'setwelcome',
    description: "this is a welcome command!",
    execute(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you dont have perms to do that idiot");

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply("**YOU IDIOT MENTION A WELCOME CHANNEL OR FUCK OFF**")

        schema.findOne({guildId: message.guild.id}, async (err, data) =>{
          if(data){
            data.channelId = channel.id;
            data.save();
          }else{
              new schema({
                guildId: message.guild.id,
                channelId: channel.id,
              }).save();
          }
          message.reply(`new welcome channel has been set to ${channel}`);
        })
    }
}
