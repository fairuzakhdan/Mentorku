const express = require("express");
const router = express.Router();
const lessons = require("../controllers/lessons");
const verifyToken = require("../middlewares/verifyToken");
const paymentSuccess = require("../middlewares/paymentSuccess");
router
  .route("/")
  .post(verifyToken, lessons.createLesson)
  .get(verifyToken, lessons.getAllLesson);

router
  .route("/:lessonId")
  .get(verifyToken, lessons.getLessonById)
  .put(verifyToken, lessons.updateLessonById)
  .delete(verifyToken, lessons.deleteLessonById);

router.route("/class").get(verifyToken, lessons.getLessonForSuccessPayment);
router
  .route("/koridor/:mentorId")
  .get(verifyToken, paymentSuccess, lessons.getLessonsByMentorForUser);

module.exports = router;
