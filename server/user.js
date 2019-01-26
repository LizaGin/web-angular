const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  login: {
    type: String,
    index: { unique: true }
  },
  password: String, // ofc it must be salted hash or smthing like this
  role: {
    type: String,
    default: 'user'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
