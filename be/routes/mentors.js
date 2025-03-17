const express = require("express");
const router = express.Router();

const mentors = require("../controllers/mentors");

router.route("/mentors").get(mentors.getAllMentors).post(mentors.createMentors);

module.exports = router;
