const express = require("express");
const rootRouts = require("./routes/root");
const dashboardRouts = require("./routes/dashboard");
const authRouts = require("./routes/auth");
const cookies = require("cookies");
const middleware = require("./middleware")
const app = express();
const dotenv = require("dotenv")
dotenv.config();

app.set('views', __dirname + '/views');
app.locals.basedir = `${__dirname}/assets`;
app.use(express.static(`${__dirname}/assets`));
app.use(cookies.express('a', 'b', 'c'));

app.use('/', middleware.updateUser,rootRouts, authRouts, middleware.validateUser, middleware.validateGuild, dashboardRouts);

app.get('*', (req, res) =>{
    res.render('errors/404.pug')
});
const port = process.env.PORT || 3000;

app.listen(port, () =>console.log(`server is on http://localhost:${port}`))
