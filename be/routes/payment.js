const express = require("express");
const router = express.Router();
const payment = require("../controllers/payment");

router
  .route("/:mentorId/payment")
  .post(payment.createPayment)
  .get(payment.getPayment);

module.exports = router;
