const mongoose = require("mongoose");
const Mentor = require("../models/mentors");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then((result) => {
    console.log("Database Connect");
  })
  .catch((err) => {
    console.log("Database tidak Connect", err.message);
  });

async function seedMentor() {
  const mentors = [
    {
      name: "Rishi Gupta",
      email: "rishigupita.com",
      phone: "082711212",
      password: "admin12",
      skills: ["java", "python", "NodeJS", "Redis", "REST"],
      experience: [
        {
          company: "Garuda Indonesia",
          position: "Software Engineer",
          years: 10,
        },
        {
          company: "Gojek",
          position: "Fullstack Developer",
          years: 7,
        },
      ],
      role: "Tech Lead",
      linkedin: "https://www.linkedin.com/in/rishigupta95/",
      language: ["Indonesia", "English"],
      location: ["Jakarta"],
      price: 150000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
      expertise: ["Web", "Mobile", "Backend Developer"],
      education: [
        {
          organization: "Institut Teknologi Bandung",
          major: "S2 Computer Science",
        },
        {
          organization: "Institut Teknologi Garut",
          major: "S1 Computer Science",
        },
      ],
      summary:
        "Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun.",
      profilePicture: {
        url: "public/images",
        filename: "user.jpg",
      },
    },
    {
      name: "Shasank Pandey",
      email: "shasankpandey@gmail.com",
      phone: "082711212",
      password: "admin2",
      skills: ["Javascript", "Typescript", "ReactJS", "NodeJS", "HTML", "CSS"],
      experience: [
        {
          company: "Traveloka",
          position: "Machine Learning",
          years: 10,
        },
        {
          company: "Tiket.com",
          position: "Machine Learning",
          years: 7,
        },
      ],
      role: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/shasank-pandey-367579102/",
      language: ["Indonesia", "English"],
      location: ["Singapore"],
      price: 100000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
      expertise: [
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
      ],
      education: [
        {
          organization: "Institut Teknologi Bandung",
          major: "S2 Computer Science",
        },
      ],
      summary:
        "Saya adalah seorang Machine Learning engineer dengan pengalaman lebih dari 10 tahun.",
      profilePicture: {
        url: "public/images",
        filename: "user.jpg",
      },
    },
    {
      name: "Vineet Maheshwari",
      email: "vineetmaheshwari@gmail.com",
      phone: "082711212",
      password: "vineet123",
      skills: ["Python", "SQL", "data visualisation"],
      experience: [
        {
          company: "Uber",
          position: "Data Engineer",
          years: 3,
        },
        {
          company: "Gojek",
          position: "Data Analysis",
          years: 2,
        },
      ],
      role: "Data Quality & Governance Engineer",
      linkedin: "https://www.linkedin.com/in/vineet-maheshwari-264b155b/",
      language: ["Indonesia", "English"],
      location: ["Jakarta"],
      price: 120000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
      expertise: [
        "Data Analysis",
        "Big Data",
        "Data Integration",
        "Data Quality",
      ],
      education: [
        {
          organization: "Institut Teknologi Bandung",
          major: "S2 Computer Science",
        },
      ],
      summary:
        "Saya adalah seorang Data engineer dengan pengalaman lebih dari 5 tahun.",
      profilePicture: {
        url: "public/images",
        filename: "user.jpg",
      },
    },
    {
      name: "Gourav Rusiya",
      email: "gouravrusiya@gmail.com",
      phone: "082711212",
      password: "gourav123",
      skills: ["Java", "Springboot", "OOP"],
      experience: [
        {
          company: "Telkom Indonesia",
          position: "Fullstack Developer",
          years: 5,
        },
        {
          company: "Indosat Ooredo",
          position: "Software Developer",
          years: 10,
        },
      ],
      role: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/grusiya/",
      language: ["Indonesia", "English"],
      location: ["Jakarta"],
      price: 50000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
      expertise: ["Fullstack Developer", "Web Developer"],
      education: [
        {
          organization: "Institut Teknologi Bandung",
          major: "S2 Computer Science",
        },
      ],
      summary:
        "Saya adalah Software Engineer dengan pengalaman dalam perancangan, pengembangan, dan optimasi sistem perangkat lunak. Saya berfokus pada solusi teknologi yang efisien dan skalabel.",
      profilePicture: {
        url: "public/images/user.jpg",
        filename: "user.jpg",
      },
    },
  ];

  Mentor.insertMany(mentors)
    .then((result) => {
      console.log("Data seed berhasil disimpan.");
    })
    .catch((err) => {
      console.log("Data gagal disimpan:", err.message);
    });
}

seedMentor();
