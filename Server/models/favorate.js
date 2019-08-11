const mongoose = require('mongoose');

const favorateSchema = mongoose.Schema({
    user_id : String,
    place_id : String,
    
})

module.exports = mongoose.model('favorate',favorateSchema,'favorates');