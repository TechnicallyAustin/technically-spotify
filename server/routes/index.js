var express = require('express');
var router = express.Router();
const getUsersCollection = require('../data/db/db.js')

/* GET home page. */
router.get('/', (req, res, next) => {
    res.status(200).json(req.user)

  
});

module.exports = router;
