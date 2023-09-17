const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require('bcrypt');
const {getUsersCollection} = require('../data/db/db.js')
// const getUsersCollection

exports.get_local_signup = asyncHandler(async(req, res, next) => {
    try{
        res.send("Rendered by Client")
    }
    catch (err){
        console.error(err)
    }
});

exports.post_local_signup = asyncHandler(async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
    try{

      const newUser = {
        first_name: req.body.first_name,
        given_name: req.body.given_name,
        username: req.body.username,
        password: hashedPassword,
        playists: [],
        audiobooks: [],
        liked_songs: []
      }
       getUsersCollection().insertOne(newUser)
       res.redirect('http://localhost:5173/login')
    }
    catch(err){
        console.error(err)
    }
});

 exports.get_local_login = asyncHandler(async (req, res, next) => {
   try {
     res.send("Rendered by Client")
   } catch (err) {
     console.errer(err);
   }
 });

exports.post_local_login = passport.authenticate("local", {
    failureRedirect: "/login", function(req, res) {
        console.log("login failed", req.body);
    },
    successRedirect: "http://localhost:5173/"
})

 exports.get_local_logout = asyncHandler(async (req, res, next) => {
   try {
     res.send("Rendered by Client");
   } catch (err) {
     console.errer(err);
   }
 });

exports.post_local_logout = (req, res) => {
  req.logout();
  res.redirect("/");
};