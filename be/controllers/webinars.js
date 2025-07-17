const Webinar = require("../models/webinars");
const Payment = require("../models/payment");
const createWebinar = async (req, res) => {
  try {
    const webinarBody = {
      title: req.body.title,
      description: req.body.description,
      datetime: req.body.datetime,
      linkMeet: req.body.datetime,
      mentorId: req.user.id,
    };
    const webinar = new Webinar(webinarBody);
    await webinar.save();
    res.status(201).json({
      status: "success",
      data: webinar,
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      message: err.message,
      data: null,
    });
  }
};

const getAllWebinar = async (req, res) => {
  const webinars = await Webinar.find({ mentorId: req.user.id });
  if (!webinars) {
    res.status(404).json({
      status: "failed",
      data: null,
    });
  }
  res.status(200).json({
    status: "success",
    data: webinars,
  });
};

const getAllWebinarByStatusSuccess = async (req, res) => {
  try {
    const webinars = await Webinar.find().populate({
      path: "mentorId",
      select: "profilePicture",
    });

    return res.status(200).json({
      status: "success",
      data: webinars,
    });
  } catch (err) {
    console.error("Error getAllWebinarByStatusSuccess:", err);
    return res.status(500).json({
      status: "failed",
      message: "Terjadi kesalahan pada server",
      data: null,
    });
  }
};

module.exports = { createWebinar, getAllWebinar, getAllWebinarByStatusSuccess };
