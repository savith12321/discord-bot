const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'dep',
    cooldown: 0,
    description: ';-;',
    async execute (message, args, client){
        if(!args[0]) return message.reply("please specifi the ammount u want to deposite")
        if(isNaN(args[0])) return message.reply("please specifi a number");
        await profileSchema.findOne({ UserID: message.author.id }, async (err, data) =>{
            if(data.wollet < args[0]) return message.reply("you dont have that much money on your wollet");

            data.wollet =  data.wollet - args[0];
            data.bank =  data.bank + args[0];
            data.save();
            message.reply(`${message.author}, now has ${data.wollet}€ on his wollet and ${data.bank}€ on his bank.`)
        });
    }
}