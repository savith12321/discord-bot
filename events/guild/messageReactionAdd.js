module.exports = async (Discord, client, messageReaction, user) => {
    if(messageReaction.emoji.name == "❌" && messageReaction.guild.id == null){
        messageReaction.message.delete()
    }
}
