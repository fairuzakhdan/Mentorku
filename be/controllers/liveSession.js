const LiveSession = require("../models/liveSession");

const getLiveSessionByMentorId = async (req, res) => {
  const { mentorId } = req.params;
  const live = await LiveSession.findOne({ mentorId });
  if (!live) {
    return res.status(404).json({
      status: "failed",
      message: "Live Session Not Found",
    });
  }
  return res.status(200).json({
    status: "success",
    data: live,
  });
};

const getLiveSessionForMentor = async (req, res) => {
  const live = await LiveSession.findOne({ mentorId: req.user.id });
  if (!live) {
    return res.status(404).json({
      status: "failed",
      message: "Live Session Not Found",
    });
  }
  return res.status(200).json({
    status: "success",
    data: live,
  });
};

const createLiveSession = async (req, res) => {
  const { scheduleType, meetingPerWeek } = req.body;
  try {
    const newLiveSession = await LiveSession.create({
      scheduleType,
      meetingPerWeek,
      mentorId: req.user.id,
    });
    return res.status(201).json({
      status: "success",
      data: newLiveSession,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

const updatedLiveSession = async (req, res) => {
  try {
    const liveSession = await LiveSession.findOne({ mentorId: req.user.id });
    if (!liveSession) {
      return res.status(404).json({
        status: "failed",
        message: "Live Session Not Found",
      });
    }
    await LiveSession.updateOne(req.body);
    return res.status(200).json({
      status: "success",
      message: "Live Session Successfully Updated",
    });
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "Live Session failed Updated",
    });
  }
};

module.exports = {
  getLiveSessionByMentorId,
  getLiveSessionForMentor,
  createLiveSession,
  updatedLiveSession,
};
