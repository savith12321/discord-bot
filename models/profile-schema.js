const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    UserID:{type: String, require: true, unique: true},
    UserName:{type:String},
    wollet:{type: Number, default:500},
    bank:{type: Number}
});

module.exports = mongoose.model('PrifileModle', Schema);
