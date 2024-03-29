const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  username:String,
  name: String,
  age: Number,
  gender: String
});

const User = mongoose.model("users", userSchema);

module.exports = User;