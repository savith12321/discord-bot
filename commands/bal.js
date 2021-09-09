const profileSchema = require('../../models/profile-schema');
module.exports = {
    name: 'bal',
    cooldown:1,
    description: "this is a ping command!",
    execute(message, args, client){
        let profileData;
        try {
          profileData = await profileSchema.findOne({ userID: message.author.id });
          if (!profileData) {
            let profile = await profileSchema.create({
              UserID: message.author.id,
              UserName: message.author.username,
              wollet: 500,
              bank: 0,
            });
            profile.save();
          }
        } catch (err) {
          console.log(err);
        }

    }
}
