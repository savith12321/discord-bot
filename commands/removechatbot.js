const schema = require("../models/chatbot-schema")
module.exports = {
    name: 'removechatbot',
    cooldown: 60,
    description: "this is a removewelcome command!",
    execute(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you dont have perms to do that idiot");
        schema.findOne({guildId: message.guild.id}, async (err, data) =>{
          if(data){
            data.channelId = "";
            data.isEnable = false;
            data.save();
          }else{
              message.reply("you have not setup our welcome command");
          }
          message.reply(`you have success fully removed welcome channel :)`);
        })
    }
}
