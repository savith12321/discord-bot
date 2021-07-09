module.exports = async (Discord, client, messageReaction, user) => {
    console.log(client.user.id)
    if(messageReaction.message.author.id == client.user.id && messageReaction.emoji.name == "❌"){
        messageReaction.message.delete()
    }
}
