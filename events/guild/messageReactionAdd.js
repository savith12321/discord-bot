module.exports = async (Discord, client, messageReaction, user) => {
    if(!messageReaction.message.channel.type === "dm") return;
    if(messageReaction.emoji.name == "❌"){
        messageReaction.message.delete()
    }
}
