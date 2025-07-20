const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const moment = require("moment-timezone");

const userSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    default: "081234567890",
  },
  password: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    default: "No Set",
  },
  profilePicture: {
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    filename: { type: String, default: "user.jpg" },
  },
  accessLevel: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
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

const User = mongoose.model("User", userSchema);
module.exports = User;
