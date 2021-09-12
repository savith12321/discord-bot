module.exports = {
    name: 'kick',
    cooldown:10,
    description: "this is a kick command!",
    async execute(message, args){
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Don't wast your time bro **YOU DONT HAVE PERMS TO DO THAT IDIDOT**").then(m => m.delete(5000));

      var member = message.mentions.users.first();
      if(member){
          var target = message.guild.members.cache.get(member.id);
          await target.kick().catch(async (err) => {
            await message.react("❌");
            return message.channel.send(":boom: I could not kick that ban that member see do i have perms or he/she have higher perms thane me"); 
          });
          message.reply(`You **KICK** ${target}`)
      }
      else{
        message.reply("Don't be an idiot **MENTION A MEMBER TO KICK IDIOT**")
      }

    }
}
