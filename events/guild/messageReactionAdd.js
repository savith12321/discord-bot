module.exports = async (Discord, client, messageReaction, user) => {
    console.log(messageReaction.emoji.name)
    if(messageReaction.message.author.id == client.user.id && messageReaction.emoji.name == "x"){
        messageReaction.message.delete()
    }
}
