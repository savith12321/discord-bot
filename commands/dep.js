const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'dep',
    cooldown: 0,
    description: ';-;',
    async execute (message, args, client){
        if(!args[0]) return message.reply("please specifi the ammount u want to deposite")
        await profileSchema.findOne({ UserID: message.author.id }, async (err, data) =>{
            if(args[0] == "max"){
                data.bank += data.wollet
                data.wollet = 0 
                data.save()
                message.reply(`${message.author}, now has **${data.wollet}€** on his wollet and **${data.bank}€** on his bank.`)
                return;
            }
            if(isNaN(args[0])) return message.reply("please specifi a number");
            if(data.wollet < args[0]) return message.reply("you dont have that much money on your wollet");

            data.wollet -= parseFloat(args[0]);
            data.bank += parseFloat(args[0]);
            data.save();
            message.reply(`${message.author}, now has **${data.wollet}€** on his wollet and **${data.bank}€** on his bank.`)
        });
    }
}