const welcomeSchema = require('../../models/welcome-schema');
const profileSchema = require('../../models/profile-schema');
const { CanvasSenpai } = require('canvas-senpai');
const canva = new CanvasSenpai();
module.exports = async(Discord, client, member) => {
    console.log('hi')
    console.log('member joined')
    let profileData;
    try {
      profileData = await profileSchema.findOne({ UserID: member.id });
      if (!profileData && member.bot == false) {
        let profile = await profileSchema.create({
          UserID: member.id,
          UserName: member.displayName,
          wollet: 500,
          bank: 0,
        });
        profile.save();
      }
    } catch (err) {
      console.log(err);
    }
    await welcomeSchema.findOne({ guildId: member.guild.id }, async(err, data) => {
        if (!data) return;
        if (data.channelId === '') return;
        const user = member.user;
        const channel = member.guild.channels.cache.get(data.channelId);
        let welcomeimg = await canva.welcome(member, { link: 'http://www.beach-backgrounds.com/wallpapers/view-from-the-hill-on-the-monaco-wallpaper-1920x600-461.jpg' })
        const userEmbed = new Discord.MessageEmbed()
            .setTitle(`Welcome ${user.username} to ${member.guild.name} the discord server`)
            .setThumbnail(`${user.displayAvatarURL()}`)
            .setColor('RANDOM')
            .addField(`About you`, `\n USER TAG: ${user} \n USER NO: ${member.guild.memberCount}`)
            .addField(`About us`, `\n SERVER NAME: ${member.guild.name} \n TOTAL MEMBERS WITH YOU: ${member.guild.memberCount}`);
        const attachment = new Discord.MessageAttachment(
            welcomeimg,
            'welcome-image.png'
        );
        userEmbed.setImage("attachment://welcome-image.png")
        channel.send(`Hey ${user} welcome to our server **${member.guild.name}** \n`);
        channel.send({embeds: [userEmbed], files: [attachment]});
    });
}