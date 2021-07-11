module.exports = async (Discord, client, messageReaction, user) => {
    if(!messageReaction.guild == null) return;
    if(messageReaction.emoji.name == "❌"){
        messageReaction.message.delete()
    }
}
