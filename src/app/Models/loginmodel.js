const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
});

const User = mongoose.model('Login_Data', loginSchema);

module.exports = User;