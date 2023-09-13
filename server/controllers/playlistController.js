const express = require('express');
const router = express.Router()
const asyncHandler = require("express-async-handler");

exports.get_all_playlists = asyncHandler(async(req, res, next) => {
});

exports.get_one_playlist = asyncHandler(async(req, res, next) => {
});

exports.update_playlist = asyncHandler(async(req, res, next) => {
});
exports.put_update_playlist = asyncHandler(async(req, res, next) => {
});

exports.get_delete_playlist = asyncHandler(async(req, res, next) => {
});
exports.delete_delete_playlist = asyncHandler(async(req, res, next) => {
});



module.exports = router