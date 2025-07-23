const express = require("express");
const router = express.Router();
const webinars = require("../controllers/webinars");
const verifyToken = require("../middlewares/verifyToken");
const paymentSuccess = require("../middlewares/paymentSuccess");
router
  .route("/")
  .post(verifyToken, webinars.createWebinar)
  .get(verifyToken, webinars.getAllWebinar);

router
  .route("/success")
  .get(verifyToken, webinars.getAllWebinarByStatusSuccess);

router
  .route("/:webinarId")
  .get(verifyToken, webinars.getWebinarById)
  .delete(verifyToken, webinars.deleteWebinarById)
  .put(verifyToken, webinars.updateWebinarById);

module.exports = router;
