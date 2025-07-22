const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const mentors = require("../controllers/mentors");

router
  .route("/")
  .get(verifyToken, isAdmin, mentors.getAllMentors)
  .post(mentors.createMentors);
router
  .route("/admin")
  .post(verifyToken, isAdmin, mentors.createMentors)
  .get(verifyToken, isAdmin, mentors.getAllMentors);
router
  .route("/:mentorId")
  .get(mentors.getMentorById)
  .put(mentors.updateMentorById)
  .delete(mentors.deleteMentorById);

router.route("/recommend").post(mentors.findMentorByRecommendation);

module.exports = router;
