const z = require("zod");
const Session = require("../models/sessions");

const getAllSession = async (req, res) => {
  const sessions = await Session.find({ mentorId: req.user.id });
  return res.status(200).json({
    status: "success",
    data: sessions,
  });
};

const getSessionById = async (req, res) => {
  const { sessionId } = req.params;
  const session = await Session.findOne({
    _id: sessionId,
    mentorId: req.user.id,
  });
  if (!session) {
    return res.status(404).json({
      status: "failed",
      data: null,
      message: "Session Not Found",
    });
  }
  return res.status(200).json({
    status: "success",
    data: session,
  });
};

const getSessionByMentorId = async (req, res) => {
  const { mentorId } = req.params;
  try {
    const sessions = await Session.find({ mentorId });

    // Perbaikan: session akan selalu berupa array, jadi periksa panjangnya
    if (sessions.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No sessions found for the given mentor ID",
      });
    }

    return res.status(200).json({
      status: "success",
      data: sessions,
    });
  } catch (err) {
    return res.status(500).json({
      // Perbaikan status code
      status: "failed",
      message: "Internal server error",
    });
  }
};

const createSession = async (req, res) => {
  const sessionPost = {
    day: req.body.day,
    session: req.body.session,
    meeting: req.body.meeting,
    mentorId: req.user.id,
  };
  try {
    const newSession = new Session(sessionPost);
    console.log(newSession);
    await newSession.save();
    return res.status(201).json({
      status: "success",
      message: "Session berhasil ditambahkan",
      data: newSession,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: "Data tidak valid",
        errors: err.errors,
      });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateSessionById = async (req, res) => {
  const { sessionId } = req.params;
  const session = await Session.findOne({
    _id: sessionId,
    mentorId: req.user.id,
  });
  if (!session) {
    return res.status(403).json({
      status: "failed",
      message: "Forbidden",
    });
  }
  try {
    await session.updateOne({
      ...req.body,
      mentorId: req.user.id,
    });
    return res.status(200).json({
      status: "success",
      message: "Session successfully updated",
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: "Data tidak valid",
        errors: err.errors,
      });
    }
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const deleteSessionById = async (req, res) => {
  const { sessionId } = req.params;
  try {
    const session = await Session.findOne({
      _id: sessionId,
      mentorId: req.user.id,
    });
    if (!session) {
      return res.status(403).json({
        status: false,
        message: "Forbidden",
      });
    }
    await session.deleteOne();
    res.status(200).json({
      status: "success",
      message: "Session successfully deleted",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = {
  createSession,
  getAllSession,
  getSessionById,
  getSessionByMentorId,
  deleteSessionById,
  updateSessionById,
};
