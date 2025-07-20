const mentee = require("../controllers/mentee");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

router
  .route("/")
  .get(verifyToken, mentee.getAllMenteForPayment)
  .put(verifyToken, mentee.updateMenteeForPayment);

router.route("/:paymentId").delete(verifyToken, mentee.deleteMenteeForPayment);
module.exports = router;
