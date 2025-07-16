const express = require("express");
const router = express.Router();
const lessons = require("../controllers/lessons");
const verifyToken = require("../middlewares/verifyToken");

router
  .route("/")
  .post(verifyToken, lessons.createLesson)
  .get(verifyToken, lessons.getAllLesson);

router.route("/class").get(verifyToken, lessons.getLessonForSuccessPayment);

module.exports = router;
