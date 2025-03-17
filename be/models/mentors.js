const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");

const mentorSchema = new Schema({
  id: {
    type: String,
    default: uuidv4,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
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
    url: String,
    filename: String,
  },
  skills_certificate: [
    {
      url: String,
      filename: String,
    },
  ],
  reviews: [{ type: String, ref: "Review" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
