const Mentor = require("../models/mentors");
const mentorSchema = require("../schemas/mentor");
const z = require("zod");
const getAllMentors = async (req, res) => {
  const mentors = await Mentor.find();
  return res.status(200).json(mentors);
};

const createMentors = async (req, res) => {
    const mentorPost = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
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
  
      // Mengirimkan response sukses
      return res
        .status(201)
        .json({ message: "Mentor berhasil ditambahkan", data: newMentor });
    } catch (err) {
      // Cek apakah error tersebut adalah error validasi dari Zod
      if (err instanceof z.ZodError) {
        // Jika ada error validasi Zod (misalnya data tidak valid)
        return res.status(400).json({
          details: err.errors, // Menampilkan detail error dari Zod
          data: null
        });
      }
  
      // Jika ada error lain (misalnya masalah server)
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };


module.exports = {
  getAllMentors,
  createMentors,
};
