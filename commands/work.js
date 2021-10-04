const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'beg',
    cooldown: 3600,
    description: ';-;',
    async execute (message, args, client){
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
        }
        await profileSchema.findOne({ UserID: message.author.id }, async (err, data) =>{
            get_or_loose = ["get", "loose"]
            let yeshuh =get_or_loose[Math.floor(Math.random() * get_or_loose.length)]
            if(yeshuh == "get"){
                let get_val = between(300, 1000)
                data.wollet += get_val;
                data.save();
                message.reply(`${message.author} worked as a disco washer and got **${get_val}€**`)
            }else if(yeshuh == "loose"){
                let lost_val = between(300, data.wollet)
                data.wollet -= lost_val;
                data.save();
                message.reply(`${message.author} tryed to work as a dish washer but shatters a dish and had to pay **${lost_val}€**`)
            }
        })
    }
}