var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController.js');

router.get("/home", userController.get_home)
router.get("/", userController.get_profile);

router.get("/friends/add/:id", userController.get_add_friend);
router.post("/friends/add/:id", userController.post_add_friend);

router.get("/edit/:userId", userController.get_update_profile);
router.post("/edit/:userId", userController.put_update_profile);

router.get("/delete/:userId", userController.get_delete_profile);
router.post("/delete/:userId", userController.delete_delete_profile);


module.exports = router;


