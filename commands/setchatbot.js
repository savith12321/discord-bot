const schema = require("../models/chatbot-schema")
module.exports = {
    name: 'setchatbot',
    cooldown:10,
    description: "this is a welcome command!",
    execute(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR") or !message.member.hasPermission("MANAGE_SERVER")) return message.reply("you dont have perms to do that idiot");

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply("**YOU IDIOT MENTION A CHANEL TO SET CHATBOT**")

        schema.findOne({guildId: message.guild.id}, async (err, data) =>{
          if(data){
            data.channelId = channel.id;
            data.save();
          }else{
              new schema({
                guildId: message.guild.id,
                channelId: channel.id,
                isEnable: true,
              }).save();
          }
          message.reply(`new chatbot channel has been set to ${channel}`);
        })
    }
}
