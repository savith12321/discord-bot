module.exports = async (Discord, client, messageReaction, user) => {
    if(messageReaction.emoji.name == "❌" && messageReaction.message.guild.id == null){
        messageReaction.message.delete()
    }
}
