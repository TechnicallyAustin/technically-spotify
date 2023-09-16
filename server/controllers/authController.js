const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const User = require('../models/user');
const passport = require('passport')
const passportSpotify = require('passport-spotify');

exports.get_spotify_login = asyncHandler( async(req, res, next) => {
    try{
        res.send("Rendered by client")
    }
    catch(err){
        console.error(err)
    }
})

exports.post_spotify_login = passport.authenticate("spotify", {
    failureRedirect: '/',
    function(req, res) {
        //successful auth
        res.redirect('/')
    }
});

exports.get_spotify_logout = asyncHandler( async(req, res, next) =>{
        try {
          res.send("Rendered by client");
        } catch (err) {
          console.error(err);
        }
})

exports.post_spotify_logout = (req,res) => {
    req.logout();
    res.redirect('/');
}