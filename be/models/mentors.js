const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");
const moment = require('moment-timezone')

const mentorSchema = new Schema({
  _id: {
    type: String,
    default: () => uuidv4(), 
  },
  name: { type: String},
  email: { type: String},
  password: {type: String},
  phone: { type: String},
  skills: {
    type: [String]
  },
  experience: [
    {
      company: {
        type: String,
      },
      position: {
        type: String,
      },
      years: {
        type: Number,
      },
    },
  ],
  expertise: {
    type: [String],
  },
  education: {
    type: [String],
  },
  summary: {
    type: String,
  },
  profilePicture: {
    url: {type:String, default: 'public/images/user.jpg'},
    filename: {type:String, default: 'user.jpg'},
  },
  skills_certificate: [
    {
      url: { type: String, default: "public/images/expert.jpg" },
      filename: { type: String, default: "expert.jpg" }
    },
  ],
  reviews: [{ type: String, ref: "Review" }],
  createdAt: {
    type: String,
    default: () => moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss'),
  },
  updatedAt: {
    type: String,
    default: () => moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss'),
  },
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
