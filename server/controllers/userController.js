const express = require('express');
const router = express.Router()
const asyncHandler = require("express-async-handler")

exports.get_profile = asyncHandler(async(req, res, next) => {
try{
    res.status(200).json("GET PROFILE Route Hit")
}
catch{(function(err){console.log(err)})}    
});

exports.get_add_friend = asyncHandler(async(req, res, next) => {
try {
    res.status(200).json("GET ADD FRIEND Route Hit")
}
catch{(function(err){console.log(err)})}
});
exports.post_add_friend = asyncHandler(async(req, res, next) => {
try {
    res.status(200).json("POST ADD FRIEND Route Hit")
}
catch{(function(err){console.log(err)})}
});

exports.get_update_profile = asyncHandler(async(req, res, next) => {
try {
    res.status(200).json("GET UPDATE PROFILE Route Hit")
}
catch{(function(err){console.log(err)})}
});
exports.put_update_profile = asyncHandler(async(req, res, next) => {
try {
    res.status(200).json("PUT UPDATE PROFILE Route Hit")
}
catch{(function(err){console.log(err)})}
});

exports.get_delete_profile = asyncHandler(async(req, res, next) => {
try {
    res.status(200).json("GET DELETE PROFILE Route Hit")
}
catch{(function(err){console.log(err)})}
});
exports.delete_delete_profile = asyncHandler(async(req, res, next) => {
try {
    res.status(200).json("DELETE DELETE PROFILE Route Hit")
}
catch{(function(err){console.log(err)})}
});

