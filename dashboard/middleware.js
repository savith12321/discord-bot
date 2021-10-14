const authClient = require('./auth-client')
const client = require("./bot")
module.exports.validateGuild = async(req, res, next) => {
    try{
        const key = res.cookies.get('key')
        if(key){
            const authGuilds = await authClient.getGuilds(key);
            res.locals.guilds = getMenagableGuilds(authGuilds);
        }
    }finally{
        res.locals.guilds = res.locals.guilds ?? [];
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
    const guilds = [];
     for (const id of  authGuilds.keys()){
        const isMenager = authGuilds
            .get(id).permissions
            .includes("MANAGE_GUILD");
        const guild = client.guilds.cache.get(id)
        if(guild && isMenager) guilds.push(guild);

     }
     return guilds;
}
