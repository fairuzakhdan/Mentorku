const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment-timezone");

const webinarSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  linkMeet: {
    type: String,
    required: true,
  },
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

const Webinar = mongoose.model("Webinar", webinarSchema);
module.exports = Webinar;
