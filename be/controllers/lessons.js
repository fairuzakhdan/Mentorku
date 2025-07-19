const Lesson = require("../models/lessons");
const Payment = require("../models/payment");

const getLessonForSuccessPayment = async (req, res) => {
  try {
    const payments = await Payment.find({
      status: "success",
      userId: req.user.id,
    }).populate({
      path: "mentorId",
      select: "name role profilePicture phone",
    });
    console.log(payments);
    res.status(200).json({
      status: "success",
      data: payments,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Gagal mengambil data lesson.",
    });
  }
};

const getLessonsByMentorForUser = async (req, res) => {
  const { mentorId } = req.params;
  try {
    const lessons = await Lesson.findOne({ mentorId });
    return res.status(200).json({
      status: "success",
      data: lessons,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Gagal mengambil data lesson",
    });
  }
};

const createLesson = async (req, res) => {
  const { topic, videos, articles } = req.body;
  const videosWithOwner = videos.map((video) => ({
    ...video,
    owner: req.user.email.split("@")[0],
  }));
  const newLesson = {
    topic,
    videos: videosWithOwner,
    articles,
    mentorId: req.user.id,
  };
  try {
    const lesson = new Lesson(newLesson);
    await lesson.save();
    return res.status(201).json({
      status: "success",
      data: lesson,
      message: "Lesson successfully created",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
const getAllLesson = async (req, res) => {
  const lessons = await Lesson.find({ mentorId: req.user.id });
  return res.status(200).json({
    status: "success",
    data: lessons,
  });
};

const getLessonById = async (req, res) => {
  const { lessonId } = req.params;
  const lesson = await Lesson.findOne({ _id: lessonId, mentorId: req.user.id });
  if (!lesson) {
    return res.status(403).json({
      status: "failed",
      message: "forbidden",
    });
  }
  return res.status(200).json({
    status: "success",
    data: lesson,
  });
};

const updateLessonById = async (req, res) => {
  const { lessonId } = req.params;
  const lesson = await Lesson.findOne({ _id: lessonId, mentorId: req.user.id });
  if (!lesson) {
    return res.status(403).json({
      status: "failed",
      message: "Forbidden",
    });
  }
  try {
    const videosWithOwner = req.body.videos.map((video) => ({
      ...video,
      owner: req.user.email.split("@")[0],
    }));
    await lesson.updateOne({
      ...req.body,
      videos: videosWithOwner,
      mentorId: req.user.id,
    });
    return res.status(200).json({
      status: "success",
      message: "Lesson successfully updated",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const deleteLessonById = async (req, res) => {
  const { lessonId } = req.params;
  const lesson = await Lesson.findOne({
    _id: lessonId,
    mentorId: req.user.id,
  });
  if (!lesson) {
    return res.status(403).json({
      status: 'failed',
      message: "Forbidden",
    });
  }
  await lesson.deleteOne();
  res.status(200).json({
    status: "success",
    message: "Lesson successfully deleted",
  });
};

module.exports = {
  getLessonForSuccessPayment,
  getLessonsByMentorForUser,
  createLesson,
  getAllLesson,
  getLessonById,
  updateLessonById,
  deleteLessonById,
};
