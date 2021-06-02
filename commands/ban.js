module.exports = {
    name: 'ban',
    cooldown:10,
    description: "this is a ban command!",
    async execute(message, args){
      if(message.deletable) message.delete();
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Don't wast your time bro **YOU DONT HAVE PERMS TO DO THAT IDIDOT**");

      var member = message.mentions.users.first();
      if(member){
          var target = message.guild.members.cache.get(member.id);
          target.ban();
          message.reply(`You **BAN** ${target}`)
      }
      else{
        message.reply("Don't be an idiot **MENTION A MEMBER TO BAN OR FUCK OFF**");
      }

    }
}
