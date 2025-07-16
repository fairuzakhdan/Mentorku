const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment-timezone");

const lessonSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4(),
  },
  topic: {
    type: String,
    required: true,
  },
  videos: [
    {
      title: {
        type: String,
      },
      link: {
        type: String,
      },
      owner: {
        type: String,
      },
      createdAt: {
        type: String,
        default: () =>
          moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss"),
      },
    },
  ],
  articles: [
    {
      header: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  mentorId: {
    type: String,
    ref: "Mentor",
    required: true,
  },
  createdAt: {
    type: String,
    default: () => moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss"),
  },
  updatedAt: {
    type: String,
    default: () => moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss"),
  },
});
const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
