const axios = require("axios");
const { Client, CommandInteraction } = require("discord.js");
const {SlashCommandBuilder} = require("@discordjs/builders");
module.exports = {
    ...new SlashCommandBuilder().setName("covid").setDescription("find covid statics").addStringOption(option => option.setName("county").setDescription("county you want covid statics")),
    run: async (client, interaction, args) => {
        let countury = args.join("%20");
        if (!args[0]) countury = 'world'
        let url = `https://coronavirus-19-api.herokuapp.com/countries/${countury}`;
        axios
            .get(url)
            .then((res) => {
                //console.log("RES:", res.data.image)
                if (res.data.country == undefined) return interaction.followUp(":warning: this country dos not exists");
                const embed = new MessageEmbed()
                    .setTitle(res.data.country)
                    .addField("cases:", res.data.cases.toString(), true)
                    .setThumbnail()
                    .addField("today cases:", res.data.todayCases.toString(),true)
                    .addField("deaths", res.data.deaths.toString(),true)
                    .addField("today deaths", res.data.todayDeaths.toString(),true)
                    .addField("recovered", res.data.recovered.toString(),true)
                    .addField("active", res.data.active.toString(),true)
                    .addField("total tests", res.data.totalTests.toString(),true)
                    .setTimestamp()
                    .setColor("RANDOM")
                    .setFooter("Stay Safe :)")

                    interaction.followUp({embeds:[embed]});

            })
    }
};