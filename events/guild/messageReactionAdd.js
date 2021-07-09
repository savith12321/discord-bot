module.exports = async (Discord, client, messageReaction, user) => {
    //console.log(messageReaction.emoji.name)
    messageReaction.message.author.id
    if(messageReaction.message.author.id == client.user.id && messageReaction.emoji.name == "❌"){
        messageReaction.message.delete()
    }
}
