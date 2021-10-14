module.exports = {
    name: 'ban',
    cooldown:10,
    description: "this is a ban command!",
    async execute(message, args){
      let error = false;
      if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Don't wast your time bro **YOU DONT HAVE PERMS TO DO THAT IDIDOT**");
      var member = message.mentions.users.first();
      if(member){
          var target = message.guild.members.cache.get(member.id);
          await target.ban().catch(async (err) => {
            error = true;
            await message.react("❌");
            return message.channel.send(":boom: I could not ban that member see do i have perms or he/she have higher perms thane me")
          });          
          if(!error){
            message.reply(`You **BAN** ${target}`).cache(() =>{});
          }
      }
      else{
        message.reply("Don't be an idiot **MENTION A MEMBER TO BAN IDIOT**").cache(() =>{});
      }

    }
}
