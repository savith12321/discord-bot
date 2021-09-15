const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
module.exports = {
    name: 'user-info',
    cooldown:10,
    description: "sends users infomation",
    execute(message, args){
      colors = ['#483d8b', '#7fff00', '#dc143c', '#ecf05b', '#41b1ed', '#e16ff2', '#f6a3cf', '#9cf063', '#32ecad']
      const mentiondMember = message.mentions.members.first();
      const mentiondUser = message.mentions.users.first();
      const userEmbed = new Discord.MessageEmbed()
          .setColor(colors[Math.floor(Math.random() * colors.length)])
          .setTitle(`User infomation for ${mentiondUser.username}`)
          .setThumbnail(mentiondUser.displayAvatarURL())
          .addField(`Username:`, `${mentiondUser.username}`)
          .addField(`User ID:`, `${mentiondUser.id}`)
          .addField(`Account created:`, `${mentiondUser.createdAt}`)
          .addField(`Joind the server at:`, `${mentiondMember.joinedAt}`)
          .addField(`Nick name:`, `${mentiondMember.nickname}`)
          .addField(`region:`, `${mentiondUser.region}`)
          .setTimestamp()
          .setFooter("User info of " + `${mentiondUser.username}`)
      console.log(mentiondUser);
      console.log(mentiondMember);

      message.channel.send({embeds:[userEmbed]}).catch(err => console.log(err));
    }
}
