const express = require("express");
const bot  = require("../bot");

const router = express.Router();

router.get('/dashboard', (req, res) =>{
    res.render('dashboard/index.pug')
});

router.get('/servers/:id', (req, res) =>{

    const guild = bot.guilds.cache.get(req.params.id);
    if(guild == undefined){
        return res.render('errors/404.pug')
    }
    res.render('dashboard/show.pug', {
        guild: bot.guilds.cache.get(req.params.id),
        channelSize: guild.channels.cache.size
    })
});

module.exports = router;
