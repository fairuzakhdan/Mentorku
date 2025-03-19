const Mentor = require("../models/mentors");
const mentorSchema = require("../schemas/mentor");
const z = require("zod");
const natural = require('natural');


const getAllMentors = async (req, res) => {
  const mentors = await Mentor.find();
  return res.status(200).json(mentors);
};

const createMentors = async (req, res) => {
    const mentorPost = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      skills: req.body.skills,
      experience: req.body.experience,
      expertise: req.body.expertise,
      education: req.body.education,
      summary: req.body.summary,
      reviews: req.body.reviews,
    };
  
    try {
      // Validasi data menggunakan Zod
      const validatedData = mentorSchema.parse(mentorPost);
      // Jika validasi berhasil, simpan data ke database
      const newMentor = new Mentor(validatedData);
      await newMentor.save();
  
      return res
        .status(201)
        .json({ message: "Mentor berhasil ditambahkan", data: newMentor });
    } catch (err) {
      // Cek apakah error tersebut adalah error validasi dari Zod
      if (err instanceof z.ZodError) {
        // Menampilkan detail error dari Zod
        return res.status(400).json({
          message: "Data tidak valid",
          errors: err.errors, // Menampilkan detail error dari Zod
        });
      }
  
      // Jika ada error lain (misalnya masalah server)
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  


  const tokenizer = new natural.WordTokenizer();
  const tfidf = new natural.TfIdf();

  const findMentorByReccomendation = async (req, res) => {
    try {
      const {expertise} = req.body
      const mentors = await Mentor.find();
      if (mentors.length === 0) {
        return res.status(404).json({
          status: false,
          message: "Mentor not found",
        })
      }
      
    // 2️⃣ Hitung kemiripan menggunakan TF-IDF dan Cosine Similarity
    const scores = mentors.map((mentor) => {
      const userText = expertise.join(' ')
      const mentorText = mentor.expertise.join(' ')

      tfidf.addDocument(userText)
      tfidf.addDocument(mentorText)

      const similarity = tfidf.tfidf(0, 1); // Hitung kemiripan
      return { mentor, similarity };
    })
    scores.sort((a, b) => b.similarity - a.similarity ); // Urutkan berdasarkan kemiripan
    res.json(scores.map((score) => {
      return {
        name: score.mentor.name,
        expertise: score.mentor.expertise,
        similarity: score.similarity.toFixed(2),
        skills: score.mentor.skills,
        experience: score.mentor.experience,
        profilePicture: score.mentor.profilePicture
      }
    }))
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

module.exports = {
  getAllMentors,
  createMentors,
  findMentorByReccomendation
};
