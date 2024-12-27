const mongoose = require('mongoose');

const registerSchama = new mongoose.Schema({
    Username:String,
    Email:String,
    Mobile:Number,
    Password:String
});

const registerUser = mongoose.model('Register_Data',registerSchama);

module.exports = registerUser;