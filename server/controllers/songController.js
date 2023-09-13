const express = require('express')
const router = express.Router()
const asyncHandler = require("express-async-handler");

exports.get_all_songs = asyncHandler( async(req,res,next) => {})

exports.get_one_song = asyncHandler(async (req, res, next) => {});

exports.get_add_song_to_playlist = asyncHandler(async (req, res, next) => {});
exports.post_add_song_to_playlist = asyncHandler(async (req, res, next) => {});

exports.get_remove_song_from_playlist = asyncHandler(async (req, res, next) => {});
exports.post_remove_song_from_playlist = asyncHandler(async (req, res, next) => {});

exports.post_add_song_to_liked_songs = asyncHandler( async(req, res, next) => {})
exports.post_remove_song_from_liked_songs = asyncHandler( async(req, res, next) => {})

module.exports = router