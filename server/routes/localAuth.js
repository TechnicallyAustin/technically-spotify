const express = require("express");
const router = express.Router();
const localAuthController = require("../controllers/localAuthController");

router.get("/admin/signup", localAuthController.get_local_signup);
router.post("/admin/singup", localAuthController.post_local_signup);
router.get("/admin/login", localAuthController.get_local_login);
router.post("/admin/login", localAuthController.post_local_login);
router.get("/admin/logout", localAuthController.get_local_logout);
router.post("/admin/logout", localAuthController.post_local_logout);

module.exports = router;
