const mentee = require("../controllers/mentee");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

router.route("/").get(verifyToken, mentee.getAllMenteForPayment);
module.exports = router;
