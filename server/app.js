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
const {connectToDb, getUsersCollection} = require('./data/db/db.js')
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const spotifyAuthRouter = require('./routes/auth');
const localAuthRouter = require('./routes/localAuth');
const playlistRouter = require('./routes/playlist')
const albumRouter = require('./routes/album');
const categoryRouter = require('./routes/category');

var app = express();
app.use(cors())
connectToDb()
app.use(session({secret: "session-secret", resave: false, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());


 


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

app.use('/', usersRouter);
app.use('/', indexRouter);
app.use('/', spotifyAuthRouter)
app.use('/', localAuthRouter);
app.use('/', playlistRouter);
app.use('/', albumRouter);
app.use('/', categoryRouter);


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
