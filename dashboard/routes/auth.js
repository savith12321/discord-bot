const express = require("express")
const config = require("../config.json")
const router = express.Router();
const Aouthclient = require("../auth-client")

router.get('/invite', (req, res) => {
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=894144261665206293&permissions=2282093686&redirect_uri=${config.url}/dashboard&response_type=code&scope=bot applications.commands`)
});

router.get('/login', (req, res) => {
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${config.id}&redirect_uri=${config.url}/auth&response_type=code&scope=identify guilds&prompt=none`)
});
router.get('/auth', async (req, res) =>{
    try{
        const code = req.query.code
        const key = await Aouthclient.getAccess(code)
        res.cookies.set("key", key)

        res.redirect('/dashboard')
    }catch{
        res.redirect('/')
    }
});

router.get('/logout', (req, res) =>{
    res.cookies.set('key', '')

    res.redirect('/')
})
module.exports = router;