const z = require("zod");
const {reviewSchema} = require('./review')

const Mentor = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Nama harus diisi"),
  email: z.string().email("Email harus valid"),
  phone: z.string().min(1, "Nomor telepon harus diisi"),
  experience: z
    .array(
      z.object({
        company: z.string().min(1, "Nama perusahaan harus diisi"), // Nama perusahaan wajib
        position: z.string().min(1, "Posisi harus diisi"), // Posisi dalam pekerjaan wajib
        years: z.number().min(1, "Minimal 1 tahun pengalaman"), // Lama pengalaman minimal 1 tahun
      })
    )
    .nonempty("Minimal harus ada 1 pengalaman kerja"),
  expertise: z.array(z.string()).nonempty("Minimal harus memiliki 1 keahlian"),
  education: z.array(z.string()).nonempty("Pendidikan Terakhir"),
  summary: z.string().nonempty(),
  profilePicture: z.string(),
  skills_certificate: z.string().nonempty(),
  reviews: z.array(reviewSchema), 
});
