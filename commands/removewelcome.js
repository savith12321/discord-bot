const schema = require("../models/welcome-schema")
module.exports = {
    name: 'removewelcome',
    cooldown: 60,
    description: "this is a removewelcome command!",
    execute(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("you dont have perms to do that idiot");
        schema.findOne({guildId: message.guild.id}, async (err, data) =>{
          if(data){
            data.channelId = "";
            data.save();
          }else{
              new schema({
                guildId: message.guild.id,
                channelId: "",
              }).save();
              message.reply("you mother fucker you have not setup our welcome command");
          }
          message.reply(`you have success fully removed welcome channel :)`);
        })
    }
}
