const Mentor = require('../models/mentors')
const getAllMentors = async (req, res) => {
    const mentors = await Mentor.find()
    return res.status(200).json(mentors)
}

const createMentor = async (req, res) => {
    const { name, email, phone, experience, expertise, education,summary, reviews  } = req.body;
    const {skills_certificate,profilePicture } = req.file;

}

module.exports = {
    getAllMentors
}