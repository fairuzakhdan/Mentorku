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
  // const userId = req.user.id;

  try {
    // const payment = await Payment.findOne({
    //   userId,
    //   status: "success",
    //   // mentorId,
    // });

    // if (!payment) {
    //   return res.status(403).json({
    //     status: "forbidden",
    //     message: "Akses ditolak, belum membayar mentor ini",
    //   });
    // }
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

module.exports = {
  getLessonForSuccessPayment,
  getLessonsByMentorForUser,
  createLesson,
  getAllLesson,
};
