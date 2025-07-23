const Mentor = require("../models/mentors");
const statusMentor = async (req, res, next) => {
  await Mentor.find({ accessLevel: "mentor" });
  next();
};
module.exports = statusMentor;
