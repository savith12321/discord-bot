const welcomeSchema = require('../../models/welcome-schema')
/*
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
module.exports = async (Discord, client, member) => {
    console.log("hi")
    console.log("member joined")
    await welcomeSchema.findOne({ guildId: member.guild.id }, async(err, data) => {
        if (!data) return;
        if (data.channelId === "") return;
        const user = member.user;
        const channel = member.guild.channels.cache.get(data.channelId);
        let welcomeimg = await canva.welcome(member, { link: "http://www.beach-backgrounds.com/wallpapers/view-from-the-hill-on-the-monaco-wallpaper-1920x600-461.jpg" })
        const userEmbed = new Discord.MessageEmbed()
            .setTitle(`Welcome ${user.username} to ${member.guild.name} the discord server`)
            .setThumbnail(`${user.displayAvatarURL()}`)
            .setColor("RANDOM")
            .addField(`About you`, `\n USER TAG: ${user} \n USER NO: ${member.guild.memberCount}`)
            .addField(`About us`, `\n SERVER NAME: ${member.guild.name} \n TOTAL MEMBERS WITH YOU: ${member.guild.memberCount}`)
        const attachment = new Discord.MessageAttachment(
            welcomeimg,
            "welcome-image.png"
        );
        channel.send(`Hey ${user} welcome to our server **${member.guild.name}** \n`);
        channel.send(userEmbed);
        channel.send(attachment);
    }); 
}
*/