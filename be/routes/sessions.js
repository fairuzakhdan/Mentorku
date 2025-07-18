const sessions = require("../controllers/sessions");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

router
  .route("/")
  .get(verifyToken, sessions.getAllSession)
  .post(verifyToken, sessions.createSession);
router
  .route("/:sessionId")
  .get(sessions.getSessionById)
  .put(sessions.updateSessionById)
  .delete(sessions.deleteSessionById);

router.route("/mentors/:mentorId").get(sessions.getSessionByMentorId);

module.exports = router;
