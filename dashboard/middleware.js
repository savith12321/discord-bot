const authClient = require('./auth-client')

module.exports.validateGuild = async(req, res, next) => {
    try{
        const authGuilds = res.cookies.get('key')
        if(key)
            res.locals.guilds = getMenagableGuilds(authGuilds)
    }finally{
        next();
    }
}


module.exports.updateUser = async(req, res, next) => {
    try{
        const key = res.cookies.get('key')
        if(key)
            res.locals.user = await authClient.getUser(key)
    }finally{
        next();
    }
}

module.exports.validateUser = async(req, res, next) =>{
    res.locals.user
        ? next()
        : res.render("errors/401.pug");
}

function getMenagableGuilds(authGuilds){

}