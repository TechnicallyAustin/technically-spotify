var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/',userController.get_profile)
router.get("/edit", userController.get_update_profile);
router.post("/edit", userController.put_edit_profile);
router.get("/delete", userController.delete_profile);
router.post("/delete", userController.delete_delete_profile);
router.get("/friends/add/:id", userController.get_add_friend);
router.post("/friends/add/:id", userController.post_add_friend);


module.exports = router;

