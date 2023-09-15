const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  given_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  playlists: {
    type: Array,
    required: true,
  },
  audiobooks: {
    type: Array,
    required: true,
  },
  liked_songs: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User