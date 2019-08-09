const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_id : String,
    username : String,
    password : String
})

module.exports = mongoose.model('user',userSchema,'users');