const express = require("express")

const app = express()

app.set('views', __dirname + '/views')

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/src/index.html")
});

const port = process.env.PORT || 3000;

app.listen(port, () =>console.log(`server is on http://localhost:${port}`))