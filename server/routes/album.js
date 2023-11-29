const express = require('express');
const router = express.Router();
const AlbumConroller = require('../controllers/AlbumController');

router.get("/albums/", AlbumConroller.get_all_albums);

module.exports = router;
