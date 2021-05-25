var unirest = require("unirest");
const fetch = require('node-fetch');
module.exports = {
    name: 'panda-fact',
    description: "send a random panda-fact",
    execute(message, args) {


        var req = unirest("GET", "https://some-random-api.ml/facts/panda");

        req.query({
            "format": "json"
        });
        req.end(function(res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body.fact);
            message.channel.send("```" + res.body.fact + "```")
        });

    }
}
