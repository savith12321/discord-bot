module.exports = async (Discord, client, messageReaction, user) => {
    if(messageReaction.emoji.name == "❌" && messageReaction.message.guild == null){
        messageReaction.message.delete()
    }
}
