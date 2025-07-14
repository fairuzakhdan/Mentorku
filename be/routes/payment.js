const express = require("express");
const router = express.Router();
const payment = require("../controllers/payment");
const verifyToken = require("../middlewares/verifyToken");

router.route("/payment").get(payment.getAllPayment);
router.route("/mentors/:mentorId/payment").post(verifyToken, payment.createPayment);

module.exports = router;
