const express = require("express");
const router = express.Router();
const payment = require("../controllers/payment");
const verifyToken = require("../middlewares/verifyToken");
router.route("/:mentorId/payment").post(verifyToken, payment.createPayment);
//   .get(payment.getPayment);

module.exports = router;
