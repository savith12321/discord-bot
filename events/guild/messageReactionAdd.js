module.exports = async (Discord, client, messageReaction, user) => {
    if(!messageReaction.message.channel.type === "dm") return;
    message = client.channels.cache.get().messages.fetch("Message_Id");
    console.log(client.user.id)
    if( == client.user.id && messageReaction.emoji.name == "❌"){
        messageReaction.message.delete()
    }
}
