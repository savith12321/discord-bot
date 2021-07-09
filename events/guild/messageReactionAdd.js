module.exports = async (Discord, client, messageReaction, user) => {
    if(!messageReaction.message.channel.type === "dm") return;
    message = client.channels.cache.get(user.id).messages.cache.get(messageReaction.message.id);
    console.log(client.user.id)
    if(message.author.id == client.user.id && messageReaction.emoji.name == "❌"){
        messageReaction.message.delete()
    }
}
