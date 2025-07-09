const sessions = require("../controllers/sessions");
const express = require("express");
const router = express.Router();

router.route("/").get(sessions.getAllSession).post(sessions.createSession);
router
  .route("/:sessionId")
  .get(sessions.getSessionById)
  .put(sessions.updateSessionById)
  .delete(sessions.deleteSessionById);

router.route("/:mentorId").get(sessions.getSessionByMentorId);
module.exports = router;
