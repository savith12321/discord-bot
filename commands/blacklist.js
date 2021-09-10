const schema = require("../models/blacklist-schema")
module.exports = {
    name: 'blacklist',
    cooldown:0,
    description: "this is a ping command!",
    execute(message, args, client){
       if (message.author.id != "856767606869458946")return message.channel.send(":warning: this is a owner only command.");
       if (!args[0]) return message.channel.send(":warning: please speciy the id of the user you want to black list.");
       var msg = args.join(" ");
       var id = msg.split("|");
       var users_id = id[0];
       var reason = id[1];

       schema.findOne({userID: users_id}, async (err, data) =>{
        if(data){
          message.channel.send(":warning: this user already black listed.")
        }else{
            new schema({
                userID: users_id,
                reason: reason,
            }).save();
            message.reply(`<@!${users_id}> has bean black listed `)
        }
      })
    }
}
