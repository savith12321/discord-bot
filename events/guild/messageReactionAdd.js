module.exports = async (Discord, client, messageReaction, user) => {
    if(messageReaction.guild.id != null) return;
    if(messageReaction.emoji.name == "❌"){
        messageReaction.message.delete()
    }
}
