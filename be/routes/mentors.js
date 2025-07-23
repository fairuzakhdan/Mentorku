const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const mentors = require("../controllers/mentors");

router.route("/").get(mentors.getActiveMentors).post(mentors.createMentors);

router
  .route("/admin")
  .post(verifyToken, isAdmin, mentors.createMentors)
  .get(verifyToken, isAdmin, mentors.getAllMentors);

router
  .route("/:mentorId/admin")
  .get(verifyToken, isAdmin, mentors.getMentorById)
  .put(verifyToken, isAdmin, mentors.updateMentorById)
  .delete(verifyToken, isAdmin, mentors.deleteMentorById);

router
  .route("/:mentorId")
  .get(mentors.getMentorById)
  .put(mentors.updateMentorById);

router.route("/recommend").post(mentors.findMentorByRecommendation);

module.exports = router;
