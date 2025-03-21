const z = require("zod");
const {reviewSchema} = require('./review')

const Mentor = z.object({
    name: z.string().min(1, "Nama harus diisi"),
    email: z.string().email("Email harus valid").min(1, "Email harus diisi"), 
    phone: z.string().min(1, "Nomor telepon harus diisi"),
    skills: z.array(z.string()).nonempty("Minimal harus memiliki 1 skills"),
    password: z.string().min(1).max(100).nonempty("Password harus diisi"),
    experience: z
      .array(
        z.object({
          company: z.string().min(1, "Nama perusahaan harus diisi"),
          position: z.string().min(1, "Posisi harus diisi"),
          years: z.number().min(1, "Minimal 1 tahun pengalaman"),
        })
      )
      .nonempty("Minimal harus ada 1 pengalaman kerja"),
    expertise: z.array(z.string()).nonempty("Minimal harus memiliki 1 keahlian"),
    education: z.array(z.string()).nonempty("Pendidikan Terakhir"),
    summary: z.string().nonempty("Summary harus diisi"),
    profilePicture: z.string().optional(),
    skills_certificate: z.string().optional(),
    reviews: z.array(reviewSchema).optional(),
  });
  
module.exports = Mentor