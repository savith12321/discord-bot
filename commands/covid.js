//https://coronavirus-19-api.herokuapp.com/countries/sri%20lanka2/
const Discord = { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require("axios");
module.exports = {
    name: 'covid',
    cooldown:10,
    description: "sends randome dog pics",
    execute(message, args) {
        let countury = args.join("%20");
        if (!args[0]) countury = 'world'
        let url = `https://coronavirus-19-api.herokuapp.com/countries/${countury}`;
        axios
            .get(url)
            .then((res) => {
                //console.log("RES:", res.data.image)
                if (res.data.country == undefined) return message.channel.send(":warning: this country dos not exsists")
                const embed = new MessageEmbed()
                    .setTitle(res.data.country)
                    .addField("cases:", res.data.cases)
                    .addField("today cases:", res.data.todayCases)
                    .addField("deaths", res.data.deaths)
                    .addField("today deaths", res.data.todayDeaths)
                    .addField("recovered", res.data.recovered)
                    .addField("active", res.data.active)
                    .addField("total tests", res.data.totalTests)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Stay Safe :)")

                message.channel.send(embed);

            })

    }
}
