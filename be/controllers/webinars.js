const Webinar = require("../models/webinars");
const Payment = require("../models/payment");
const moment = require("moment-timezone");

const createWebinar = async (req, res) => {
  try {
    const formattedDate = moment
      .tz(req.body.date, "Asia/Jakarta")
      .format("YYYY-MM-DD"); // ⬅️ hanya tanggal saja

    const webinarBody = {
      title: req.body.title,
      description: req.body.description,
      date: formattedDate, // ⬅️ simpan sebagai string "2025-07-17"
      time: req.body.time,
      linkMeet: req.body.linkMeet,
      mentorId: req.user.id,
    };

    const webinar = new Webinar(webinarBody);
    await webinar.save();

    return res.status(201).json({
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
  try {
    const webinars = await Webinar.find({ mentorId: req.user.id });
    return res.status(200).json({
      status: "success",
      data: webinars,
    });
  } catch (error) {
    console.error("Gagal mengambil data webinar:", error);

    return res.status(500).json({
      status: "failed",
      message: "Terjadi kesalahan pada server",
      data: null,
    });
  }
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

const deleteWebinarById = async (req, res) => {
  const { webinarId } = req.params;

  try {
    const webinar = await Webinar.findOne({
      _id: webinarId,
      mentorId: req.user.id,
    });

    if (!webinar) {
      return res.status(403).json({
        status: "failed",
        message: "Not Authorized or Webinar not found",
      });
    }

    await webinar.deleteOne();

    return res.status(200).json({
      status: "success",
      message: "Webinar successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const getWebinarById = async (req, res) => {
  const { webinarId } = req.params;
  try {
    const webinar = await Webinar.findOne({
      mentorId: req.user.id,
      _id: webinarId,
    });
    if (!webinar) {
      return res.status(403).json({
        status: "failed",
        message: "Not Authorized or Webinar not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Webinar successfully updated",
      data: webinar,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const updateWebinarById = async (req, res) => {
  const { webinarId } = req.params;
  const formattedDate = moment
    .tz(req.body.date, "Asia/Jakarta")
    .format("YYYY-MM-DD");
  try {
    const webinar = await Webinar.findOne({
      mentorId: req.user.id,
      _id: webinarId,
    });
    if (!webinar) {
      return res.status(403).json({
        status: "failed",
        message: "Not Authorized or Webinar not found",
      });
    }
    await webinar.updateOne({
      ...req.body,
      date: formattedDate,
      mentorId: req.user.id,
    });
    return res.status(200).json({
      status: "success",
      message: "Webinar successfully updated",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  createWebinar,
  getAllWebinar,
  getAllWebinarByStatusSuccess,
  deleteWebinarById,
  updateWebinarById,
  getWebinarById,
};
