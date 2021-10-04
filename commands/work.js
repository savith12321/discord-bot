const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'work',
    cooldown: 3600,
    description: ';-;',
    async execute (message, args, client){
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
        }
        await profileSchema.findOne({ UserID: message.author.id }, async (err, data) =>{
            if(data.wollet < 100) return message.reply("u need atleast `100€` to work go and beg for some money lmao")
            get_or_loose = ["get", "get", "get", "get", "get", "get", "get", "get"," get", "loose"]
            let yeshuh =get_or_loose[Math.floor(Math.random() * get_or_loose.length)]
            if(yeshuh == "get"){
                let get_val = between(300, 1000)
                data.wollet += get_val;
                data.save();
                message.reply(`${message.author} worked as a dish washer and got **${get_val}€**`)
            }else if(yeshuh == "loose"){
                let lost_val = between(100, data.wollet)
                data.wollet -= lost_val;
                data.save();
                message.reply(`${message.author} tryed to work as a dish washer but he shatters a dish and had to pay **${lost_val}€**`)
            }
        })
    }
}