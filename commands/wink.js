const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
	name: 'wink',
	async execute(message, args, client, discord, profileData) {
		const url = 'https://some-random-api.ml/animu/wink';

		let response; let
			data;
		try {
			response = await axios.get(url);
			data = response.data;
		} catch (e) {
			return message.channel.send('An error occured!');
		}

		const embed = new MessageEmbed()
            .setColor("RANDOM")
			.setTitle(`@${message.author.username} winks at @${message.mentions.users.first().username || message.mentions.members.first()}`)
			.setImage(data.link);

		return message.channel.send({embeds:[embed]})
	},
};