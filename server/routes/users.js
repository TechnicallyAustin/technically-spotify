var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController.js');

router.get("/user/friends/add/:id", userController.get_add_friend);
router.post("/user/friends/add/:id", userController.post_add_friend);

router.get("/user/edit/:userId", userController.get_update_profile);
router.post("/user/edit/:userId", userController.put_update_profile);

router.get("/user/delete/:userId", userController.get_delete_profile);
router.post("/user/delete/:userId", userController.delete_delete_profile);


router.get("/user/home", userController.get_home)
router.get("/user/", userController.get_profile);


module.exports = router;


