const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'with',
    cooldown: 0,
    description: ';-;',
    async execute (message, args, client){
        if(!args[0]) return message.reply("please specifi the ammount u want to withdraw")
        await profileSchema.findOne({ UserID: message.author.id }, async (err, data) =>{
            if(args[0] == "max"){
                data.bank = 0
                data.wollet = data.bank
                data.save()
                message.reply(`${message.author}, now has **${data.wollet}€** on his wollet and **${data.bank}€** on his bank.`)
                return;
            }
            if(isNaN(args[0])) return message.reply("please specifi a number");
            if(data.bank < args[0]) return message.reply("you dont have that much money on your bank");

            data.wollet += parseFloat(args[0]);
            data.bank -= parseFloat(args[0]);
            data.save();
            message.reply(`${message.author}, now has **${data.wollet}€** on his wollet and **${data.bank}€** on his bank.`)
        });
    }
}