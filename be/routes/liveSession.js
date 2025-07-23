const express = require("express");
const router = express.Router();
const liveSession = require("../controllers/liveSession");
const verifyToken = require("../middlewares/verifyToken");

router
  .route("/")
  .get(verifyToken, liveSession.getLiveSessionForMentor)
  .put(verifyToken, liveSession.updatedLiveSession)
  .post(verifyToken, liveSession.createLiveSession);

router.route("/:mentorId").get(liveSession.getLiveSessionByMentorId);

module.exports = router;
