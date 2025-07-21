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
        "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740",
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
