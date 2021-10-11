const express = require("express")

const router = express.Router();

router.get('/dashboard', (req, res) =>{
    res.render('dashboard/index.pug')
});

router.get('/dashboard/show', (req, res) =>{
    res.render('dashboard/show.pug')
});

module.exports = router;