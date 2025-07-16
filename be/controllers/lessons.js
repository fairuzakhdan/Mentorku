const Lesson = require("../models/lessons");
const Payment = require("../models/payment");

const getLessonForSuccessPayment = async (req, res) => {
  const payment = await Payment.find({ status: "success" }).populate(
    "mentorId",
    { select: "profilePicture" }
  );
  res.status(200).json({
    status: "success",
    data: payment,
  });
};

const createLesson = async (req, res) => {
  console.log(req.user);
  const newLesson = {
    topic: req.body.topic,
    videos: req.body.videos,
    articles: req.body.articles,
    mentorId: req.user.id,
  };
  console.log(newLesson);
  try {
    const lesson = new Lesson(newLesson);
    await lesson.save();
    return res.status(201).json({
      status: "success",
      data: lesson,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
const getAllLesson = async (req, res) => {
  const lessons = await Lesson.find();
  return res.status(200).json({
    status: "success",
    data: lessons,
  });
};

module.exports = { getLessonForSuccessPayment, createLesson, getAllLesson };
