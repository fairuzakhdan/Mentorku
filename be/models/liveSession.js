const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment-timezone");
const { number } = require("zod");

const liveSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4(),
  },
  scheduleType: {
    type: String,
    enum: ["month", "week"],
    default: "month",
    required: true,
  },
  meetingPerWeek: {
    type: Number,
    required: true,
    default: 2,
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

const LiveSession = mongoose.model("LiveSession", liveSchema);
module.exports = LiveSession;
