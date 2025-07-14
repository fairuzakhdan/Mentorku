const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment-timezone");

const sessionSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4(),
  },
  day: { type: String },
  session: [
    {
      times: {
        type: String,
      },
    },
  ],
  meeting: {type: Number},
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

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
