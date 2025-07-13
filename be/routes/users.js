const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");

router.route("/auth/register").post(auth.register);
router.route("/auth/login").post(auth.login);

module.exports = router;
