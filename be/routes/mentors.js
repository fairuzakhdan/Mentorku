const express = require("express");
const router = express.Router();

const mentors = require("../controllers/mentors");

router.route("/").get(mentors.getAllMentors).post(mentors.createMentors);

router.route('/find').post(mentors.findMentorByReccomendation)

module.exports = router;
