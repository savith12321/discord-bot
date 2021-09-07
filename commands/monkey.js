var unirest = require("unirest");
const fetch = require('node-fetch');
module.exports = {
    name: 'chuck-joke',
    cooldown:10,
    description: "send a random chuck-joke",
    execute(message, args) {


        var req = unirest("GET", "https://api.monkedev.com/attachments/monkey");

        req.query({
            "format": "json"
        });

        req.headers({
            "key": "c06OgzD85phncFvg6ys5qSH1q"
        });


        req.end(function(res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body.joke);
           const embed = new MessageEmbed()
          .setTitle("Meaw")
          .setImage(res.data.url)
          .setTimestamp()
          .setColor(colors[Math.floor(Math.random() * colors.length)])
          .setFooter("For cat lovers only")
           message.channel.send(embed);
        });

    }
}
