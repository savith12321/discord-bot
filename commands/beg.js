const { Client, Message, MessageEmbed } = require('discord.js');
const profileSchema = require('../models/profile-schema');
module.exports = {
    name: 'beg',
    cooldown: 40,
    description: ';-;',
    async execute (message, args, client){
        function between(min, max) {  
            return Math.floor(
              Math.random() * (max - min) + min
            )
        }

        await profileSchema.findOne({ UserID: message.author.id }, async (err, data) =>{
            true_or_false = [true, false]
            let yeshuh =true_or_false[Math.floor(Math.random() * true_or_false.length)] == true
            if(yeshuh == true){
                let val = between(100, 500)
                data.wollet += val;
                data.save();
                message.reply(`Hey, see the poor begger, here take **${val}€**`)
            }else if(yeshuh == false){
                message.reply("No money for u today lmao.")
            }
        })
    }
}