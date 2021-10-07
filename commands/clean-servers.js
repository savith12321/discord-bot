const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clean-servers',
    cooldown: 6,
    description: 'clean the bad/fake servers',
    async execute (message, args, client){
        if(!message.author.id == "856767606869458946") return message.reply(":warning: this is a owner only command")
        let final_message = ""
        for(const guild of client.guilds.cache){
            console.log(guild[1].memberCount)
            let owner = await client.users.fetch(guild[1].ownerId)
            final_message = `owner of ${guild[1].name}(${guild[0]}) is ${owner.username}(${owner.id}) with ${guild[1].memberCount}fam`
            if(guild[1].memberCount < 10){
                guild.leave();
                message.reply("fount a ileagal server and i leave it, server name :- " + guild[1].name + " and member count :- " + guild[1].memberCount)
            }
            message.reply(final_message)
        }
    }
}