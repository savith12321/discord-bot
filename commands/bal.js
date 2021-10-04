const profileSchema = require('../models/profile-schema');
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'bal',
    cooldown:1,
    description: "this is a ping command!",
    async execute(message, args, client){
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        try {
            await profileSchema.findOne({ UserID: Member.user.id }, async (err, data) =>{

                if (!data) {
                    let profile = await profileSchema.create({
                    UserID: message.author.id,
                    UserName: message.author.username,
                    wollet: 500,
                    bank: 0,
                    });
                    profile.save();
                }else{
                let embed = new Discord.MessageEmbed()
                .setTitle(`🏦・ ${Member.user.username}#${Member.user..discriminator}'s Balance`)
                .setColor("RANDOM")
                .setTimestamp()
                .addField("💶・Wollet", data.wollet.toString() + "€")
                .addField("💰️・Bank:", data.bank.toString() + "€")
                message.channel.send({embeds:[embed]});
                }
            });
        } catch (err) {
          console.log(err);
        }
    }
}
