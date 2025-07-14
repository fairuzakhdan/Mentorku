const express = require("express");
const router = express.Router();
const payment = require("../controllers/payment");
const verifyToken = require("../middlewares/verifyToken");
router.route("/:mentorId/payment").post(verifyToken, payment.createPayment);
router.route("/payment").get(verifyToken, payment.getAllPayment);

module.exports = router;
