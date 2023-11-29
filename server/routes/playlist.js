const express = require('express')
const router = express.Router()
const PlaylistController = require('../controllers/playlistController')

router.get('/playlists/', PlaylistController.get_all_playlists)

module.exports = router