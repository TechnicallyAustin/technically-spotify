require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
const session = require("express-session");
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("./models/user");
const {connectToDb} = require('./data/db/db.js')
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const spotifyAuthRouter = require('./routes/auth');
const localAuthRouter = require('./routes/localAuth');

var app = express();
connectToDb()
app.use(session({secret: "session-secret", resave: false, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())

// SPOTIFY API
  const clientID = process.env.CLIENT_ID
  const clientSecret = process.env.CLIENT_SECRET
  const responseType = process.env.RESPONSE_TYPE
  const redirectURI = process.env.REDIRECT_URI
  const query = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=user-top-read`


// PASSPORT SPOTIFY Strategy
const SpotifyStrategy = require("passport-spotify").Strategy;
passport.use(
  new SpotifyStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "http://localhost:8888/auth/spotify/callback",
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);


// PASSPORT LOCAL STRATEGY

const authUser = async (username, password, done) => {
  try {
    const user = await getUsersCollection().findOne({ username: username });
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return done(null, user);
    }
    if (!user) {
      done(null, false);
    }
    if (!match) {
      done(null, false);
    }
  } catch (err) {
    return done(err);
  }
};

passport.use(new LocalStrategy(authUser));

passport.serializeUser((user, done) => {
  return done(null, user.username);
})

passport.deserializeUser(async function (user, done) {
  return done(null, user);
});


// PASSPORT JWT STRATEGY



















// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES and ROUTE PROTECTION
  // app.use("/", authRouter);
  // function ensureAuthenticated(req, res, next) {
  //   console.log("Authenticated", req.isAuthenticated(), req.user);
  //   if (req.isAuthenticated()) {
  //     return next(); // continue to the route
  //   }
  //   if (!req.isAuthenticated()) {
  //     res.redirect("/login"); // Redirect to login if not authenticated
  //   }
  // }

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', spotifyAuthRouter)
app.use('/', localAuthRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
