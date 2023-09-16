const express = require('express');
const router = express.Router()
const authController = require('../controllers/authController');

router.get('/login', authController.get_spotify_login)
router.post("/login", authController.post_spotify_login);
router.get("/logout", authController.get_spotify_logout);
router.post("/logout", authController.post_spotify_logout);

module.exports = router