const express = require("express");
const router = express.Router();
const webinars = require("../controllers/webinars");
const verifyToken = require("../middlewares/verifyToken");

router.route("/").post(verifyToken, webinars.createWebinar);

module.exports = router;
