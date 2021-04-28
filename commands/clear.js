module.exports = {
    name: 'clear',
    description: "this is a clear command!",
    async execute(message, args){
      if(message.deletable) message.delete();
      if(!args[0]) return message.reply("You must enter a how meany messages has to be deleted **you dumbass**").then(m => m.delete(5000));
      if(isNaN(args[0])) return message.reply("You must enter a valid number **don't wast your time idiot**").then(m => m.delete(5000));
      if(args[0] > 100) return message.reply("I am sorry but **YOU CANT DELETE MORE THANE `100` MESSAGES**").then(m => m.delete(5000));
      if(args[0] < 1) return message.reply("**You Mother fucker** you know that you cant delete less thane one message").then(m => m.delete(5000));
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Don't wast your time bro **YOU DONT HAVE PERMS TO DO THAT IDIDOT**").then(m => m.delete(5000));

      message.channel.bulkDelete(args[0], true);
    }
}
