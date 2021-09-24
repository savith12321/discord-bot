module.exports = {
    name: 'clear',
    cooldown:1,
    description: "this is a clear command!",
    async execute(message, args){
      //if(message.deletable) message.delete();
      if(!args[0]) return message.reply("You must enter a how meany messages has to be deleted **you dumbass**")
      if(isNaN(args[0])) return message.reply("You must enter a valid number **don't wast your time idiot**")
      if(args[0] > 100) return message.reply("I am sorry but **YOU CANT DELETE MORE THANE `100` MESSAGES**")
      if(args[0] < 1) return message.reply("you cant delete less thane one message")
      if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Don't wast your time bro **YOU DONT HAVE PERMS TO DO THAT IDIDOT**")
      try{
       message.channel.bulkDelete(args[0], true).catch(err => {console.log(err)});
      }catch(err){
          console.log(err)
      }
    }
}
