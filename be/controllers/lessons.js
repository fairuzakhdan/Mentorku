const Lesson = require("../models/lessons");

const createLesson = async (req, res) => {
  const newLesson = {
    topic: req.body.topic,
    videos: req.body.videos,
    articles: req.body.articles,
    mentorId: req.user.id,
  };
  try {
    const lesson = await Lesson.create(newLesson);
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

module.exports = { createLesson };
