module.exports = {
    name: 'countup',
    cooldown:10,
    description: "this is a ping command!",
    async execute(message, args, client){
        if (!args[0])return message.channel.send(":warning: quary cant be null");
        if (args[0].isNaN)return message.channel.send(":warning: you should give a number");
        
        await let msg = message.channel.send(args[0])
        for(let i = args[0]; i <= 0; i--){
          await msg.edit(i);
        }
    }
}
