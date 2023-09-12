const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    first_name: {},
    given_name: {},
    username: {},
    password: {},
    playlists: {},
    audiobooks: {},
    liked_songs: {}
})

const User = mongoose.model("User", userSchema);

module.exports = User