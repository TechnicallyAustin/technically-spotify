const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const User = require("../models/user");
const passport = require("passport");
const bcrypt = require('bcrypt');
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
    try{}
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
        console.log("login failed");
    },
    successRedirect: "/"
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