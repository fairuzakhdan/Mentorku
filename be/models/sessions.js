const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment-timezone");

const sessionSchema = mongoose.Schema({
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
  mentorId: {
    type
  }
});
