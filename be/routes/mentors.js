const express = require("express");
const router = express.Router();

const mentors = require("../controllers/mentors");

router.route("/").get(mentors.getAllMentors).post(mentors.createMentors);
router
  .route("/:mentorId")
  .get(mentors.getMentorById)
  .put(mentors.updateMentorById)
  .delete(mentors.deleteMentorById);

router.route("/recommend").post(mentors.findMentorByRecommendation);

module.exports = router;
