const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment-timezone");

const paymentSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4(),
  },
  mentorId: {
    type: String,
    ref: "Mentor",
    required: true,
  },
  totalPrice: {
    type: Number,
  },
  userId: {
    type: String,
    // ref: "User",
    required: true,
  },
  schedules: [
    {
      days: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
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

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;