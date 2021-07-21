const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
var axios = require("axios").default;
module.exports = {
    name: 'tts',
    cooldown:10,
    description: "this is a ping command!",
    execute(message, args, client){
      if(!args[0])return message.channel.send(":warning: args cant be empty")
      var options = {
          method: 'POST',
          url: 'https://viomatic-com-text-to-speech-tts-v1.p.rapidapi.com/getmp3',
          params: {text: args.join(" "), language: 'en', sex: 'female'},
          headers: {
            'x-rapidapi-key': '3bf5242cbcmshb9d36e4c02b7119p113cb8jsn1dce95748840',
            'x-rapidapi-host': 'viomatic-com-text-to-speech-tts-v1.p.rapidapi.com'
          }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
        const userEmbed = new Discord.MessageEmbed()
        .setTitle("click me to get your mp3 file")
        .setURL(response.data.file)
        .setColor("RANDOM")
        message.channel.send(userEmbed);
      }).catch(function (error) {
        console.error(error);

      });
    }
}
