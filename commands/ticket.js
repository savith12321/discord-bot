module.exports = {
  name: "ticket",
  aliases: [],
  permissions: [],
  cooldown:10,
  description: "open a ticket!",
  async execute(message, args, client) {
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);


    channel.permissionOverwrites.edit(message.guild.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
    });
    channel.permissionOverwrites.edit(message.author, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
    });
    const reactionMessage = await channel.send("Thank you for contacting support!");

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).permissions.has("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.permissionOverwrites.edit(message.author, { SEND_MESSAGES: false }).catch(err => {console.log(err)});
          break;
        case "⛔":
          channel.send("Deleting this channel in 5 seconds!");
          setTimeout(() => channel.delete(), 5000).catch(err => {console.log(err)});
          break;
      }
    });

    message.channel
      .send(`We will be right with you! ${channel}`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 7000).catch((err) => {
          console.log(err)
        });
        setTimeout(() => message.delete(), 3000).catch((err) => {
          console.log(err)
        });
      })
      .catch((err) => {
        console.log(err)
      });
  },
};
