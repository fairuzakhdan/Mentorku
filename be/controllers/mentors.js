const Mentor = require("../models/mentors");
const mentorSchema = require("../schemas/mentor");
const z = require("zod");
const natural = require("natural");
const cosineSimilarity = require("cosine-similarity");
const bcrypt = require("bcrypt");

const findMentorByRecommendation = async (req, res) => {
  try {
    let { expertise } = req.body;

    // Validasi input
    if (!Array.isArray(expertise) || expertise.length === 0) {
      return res
        .status(400)
        .json({ message: "Expertise harus berupa array yang tidak kosong" });
    }

    const mentors = await Mentor.find();
    if (mentors.length === 0) {
      return res
        .status(404)
        .json({ status: false, message: "Mentor tidak ditemukan" });
    }

    // Gabungkan expertise pengguna menjadi satu string
    const userText = expertise.join(" ").toLowerCase();

    const tfidf = new natural.TfIdf();
    let documents = [];
    let mentorList = [];

    mentors.forEach((mentor, index) => {
      if (Array.isArray(mentor.expertise) && mentor.expertise.length > 0) {
        let mentorText = mentor.expertise.join(" ").toLowerCase();
        tfidf.addDocument(mentorText);
        documents.push(mentorText);
        mentorList.push({ mentor, index });
      }
    });

    // Hitung vektor TF-IDF untuk user
    tfidf.addDocument(userText);
    let userVector = [];
    tfidf.tfidfs(userText, (index, measure) => {
      userVector[index] = measure;
    });

    // Hitung similarity menggunakan cosine similarity
    let scores = mentorList.map(({ mentor, index }) => {
      let mentorVector = [];
      tfidf.tfidfs(documents[index], (i, measure) => {
        mentorVector[i] = measure;
      });

      let similarity = cosineSimilarity(userVector, mentorVector) || 0;
      return { mentor, similarity };
    });

    // Urutkan berdasarkan similarity tertinggi
    scores.sort((a, b) => b.similarity - a.similarity);

    // Filter hanya mentor dengan similarity > 0
    const result = scores
      .filter((score) => score.similarity > 0)
      .map((score) => ({
        name: score.mentor.name,
        expertise: score.mentor.expertise,
        similarity: score.similarity.toFixed(2), // Menampilkan dua angka di belakang koma
        skills: score.mentor.skills,
        experience: score.mentor.experience,
        price: score.mentor.price,
        profilePicture: score.mentor.profilePicture,
      }));

    res.json(result);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllMentors = async (req, res) => {
  const mentors = await Mentor.find();
  return res.status(200).json({
    status: "success",
    data: mentors,
  });
};

const getActiveMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find({ accessLevel: "mentor" });

    return res.status(200).json({
      status: "success",
      data: mentors,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const createMentors = async (req, res) => {
  const image = {
    url: req.body.profilePicture?.url || "public/images/user.jpg",
    filename: req.body.profilePicture?.filename || "user.jpg",
  };
  const mentorPost = {
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, 10),
    profilePicture: image,
    email: req.body.email,
    role: req.body.role,
    linkedin: req.body.linkedin,
    language: req.body.language,
    accessLevel: req.body.accessLevel,
    location: req.body.location,
    price: req.body.price,
    cvResume: req.body.cvResume,
    portopolio: req.body.portopolio,
    phone: req.body.phone,
    skills: req.body.skills,
    experience: req.body.experience,
    expertise: req.body.expertise,
    summary: req.body.summary,
    education: req.body.education,
  };

  try {
    const newMentor = new Mentor(mentorPost);
    await newMentor.save();
    console.log(mentorPost);
    return res.status(201).json({
      status: "success",
      message: "Mentor berhasil ditambahkan",
      data: newMentor,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: "Data tidak valid",
        errors: err.errors,
      });
    }
    console.log(err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMentorById = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({
        status: "failed",
        message: "Mentor tidak ditemukan",
      });
    }
    return res.status(200).json({
      status: "success",
      data: mentor,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const updateMentorById = async (req, res) => {
  const { mentorId } = req.params;
  const mentor = await Mentor.findById(mentorId);
  if (!mentor) {
    return res.status(404).json({
      status: false,
      message: "Mentor tidak ditemukan",
    });
  }

  try {
    const image = {
      url: req.body.profilePicture?.url || "public/images/user.jpg",
      filename: req.body.profilePicture?.filename || "user.jpg",
    };
    const updatedMentor = await Mentor.findByIdAndUpdate(
      mentorId,
      {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        profilePicture: image,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      status: "success",
      message: "Mentor berhasil diubah",
      data: updatedMentor,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
};
const deleteMentorById = async (req, res) => {
  const { mentorId } = req.params;
  try {
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({
        status: "failed",
        message: "Mentor tidak ditemukan",
      });
    }
    await mentor.deleteOne();
    res.status(200).json({
      status: "success",
      message: "Mentor berhasil dihapus",
    });
  } catch (err) {
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = {
  getAllMentors,
  getActiveMentors,
  createMentors,
  // createMentorForAdmin,
  findMentorByRecommendation,
  getMentorById,
  updateMentorById,
  deleteMentorById,
};
