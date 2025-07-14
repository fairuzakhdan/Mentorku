const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const verifyToken = require("../middlewares/verifyToken");

router.route("/auth/register").post(auth.register);
router.route("/auth/login").post(auth.login);
router.route("/users/me").get(verifyToken, auth.getUserLogin);

module.exports = router;
