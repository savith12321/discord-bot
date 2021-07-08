module.exports = async (Discord, client, messageReaction, user) => {
    messageReaction.message.delete()
}
