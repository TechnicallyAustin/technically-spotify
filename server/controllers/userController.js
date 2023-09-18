const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { getUsersCollection } = require("../data/db/db");

exports.get_home = asyncHandler(async (req, res, next) => {
  try {
    const user = await getUsersCollection().findOne({ username: req.user });
    if(user){
        res.status(200).json(user);
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" }); // Return an error response
    }
  } catch (err) {
    console.error(err);
    // Handle other errors, such as database connection issues, with a 500 internal server error
    res.status(500).json({ error: "Internal server error" });
  }
});

exports.get_profile = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json("GET PROFILE Route Hit");
  } catch {
    (function (err) {
      console.log(err);
    });
  }
});

exports.get_add_friend = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json("GET ADD FRIEND Route Hit");
  } catch {
    (function (err) {
      console.log(err);
    });
  }
});
exports.post_add_friend = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json("POST ADD FRIEND Route Hit");
  } catch {
    (function (err) {
      console.log(err);
    });
  }
});

exports.get_update_profile = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json("GET UPDATE PROFILE Route Hit");
  } catch {
    (function (err) {
      console.log(err);
    });
  }
});
exports.put_update_profile = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json("PUT UPDATE PROFILE Route Hit");
  } catch {
    (function (err) {
      console.log(err);
    });
  }
});

exports.get_delete_profile = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json("GET DELETE PROFILE Route Hit");
  } catch {
    (function (err) {
      console.log(err);
    });
  }
});
exports.delete_delete_profile = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json("DELETE DELETE PROFILE Route Hit");
  } catch {
    (function (err) {
      console.log(err);
    });
  }
});
