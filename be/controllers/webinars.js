const Webinar = require("../models/webinars");

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

module.exports = { createWebinar };
