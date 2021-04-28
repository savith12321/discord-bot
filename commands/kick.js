module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    async execute(message, args){
      if(message.deletable) message.delete();
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Don't wast your time bro **YOU DONT HAVE PERMS TO DO THAT IDIDOT**").then(m => m.delete(5000));

      var member = message.mentions.users.first();
      if(member){
          var target = message.guild.members.cache.get(member.id);
          target.kick();
          message.reply(`You **KICK** ${target}`)
      }
      else{
        message.reply("Don't be an idiot **MENTION A MEMBER TO KICK OR FUCK OFF**")
      }

    }
}
