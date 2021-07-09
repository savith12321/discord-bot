module.exports = async (Discord, client, messageReaction, user) => {
    if(messageReaction.message.author.id == client.user.id && messageReaction.emoji.name == "x"){
        messageReaction.message.delete()
    }
}
