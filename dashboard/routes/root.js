const express = require("express")

const router = express.Router();

router.get('/', (req, res) =>{
    res.render("index.pug")
});

router.get('/commands', (req, res) =>{
    res.render("commands.pug")
});

router.get('/commands/misc', (req, res) =>{
    res.render("misc.pug")
});

router.get('/commands/fun', (req, res) =>{
    res.render("fun.pug")
});

router.get('/commands/animals', (req, res) =>{
    res.render("animals.pug")
});

router.get('/commands/media', (req, res) =>{
    res.render("media.pug")
});

router.get('/commands/moderation', (req, res) =>{
    res.render("moderation.pug")
});

router.get('/commands/economy', (req, res) =>{
    res.render("economy.pug")
});

router.get('/commands/memey', (req, res) =>{
    res.render("memey.pug")
});

router.get('/about', (req, res) =>{
    res.render("about.pug")
});

router.get('/dt', (req, res) =>{
    res.redirect("https://dis.gd/mytickets")
});

module.exports = router;
