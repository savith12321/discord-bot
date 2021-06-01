var unirest = require("unirest");
const fetch = require('node-fetch');
module.exports = {
    name: 'chuck-joke',
    cooldown:10,
    description: "send a random chuck-joke",
    execute(message, args) {


        var req = unirest("GET", "https://geek-jokes.p.rapidapi.com/api");

        req.query({
            "format": "json"
        });

        req.headers({
            "x-rapidapi-key": "3bf5242cbcmshb9d36e4c02b7119p113cb8jsn1dce95748840",
            "x-rapidapi-host": "geek-jokes.p.rapidapi.com",
            "useQueryString": true
        });


        req.end(function(res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body.joke);
            message.channel.send("```" + res.body.joke + "```")
        });

    }
}