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
      email: "rishigupita@gmail.com",
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
      location: "Jakarta",
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
      location: "Singapore",
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
      location: "Jakarta",
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
      location: "Surabaya",
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
    {
      name: "Harshit Goyal",
      email: "harshitgoyal@gmail.com",
      phone: "082711212",
      password: "harshit123",
      skills: ["SQL", "python", "APIs","C++","Graphql"],
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
      role: "Senior Software Engineer",
      linkedin: "https://www.linkedin.com/in/harshit-goyal1/",
      language: ["Indonesia", "English"],
      location: "Surabaya",
      price: 50000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
      expertise: ["Backend Developer"],
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
    {
      name: "Vivek Parmar",
      email: "vivekparmar@gmail.com",
      phone: "082711212",
      password: "vivek123",
      role: "DevOps Engineer",
      expertise: ["DevOps","Deployement","Cloud"],
      skills: ["AWS DevOps", "Teamwork", "Docker"],
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
      linkedin: "https://www.linkedin.com/in/vivekparmardev/",
      language: ["Indonesia", "English"],
      location: "Surabaya",
      price: 50000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Ankit Raj",
      email: "ankitraj@gmail.com",
      phone: "082711212",
      password: "ankit123",
      role: "Quality Assurance",
      expertise: ["Backend Developer","Automated Testing"],
      skills: ["SQL", "Python", "Docker", "Javascript","ReactJS","NodeJS","Typescript"],
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
      linkedin: "https://www.linkedin.com/in/ank1traj/",
      language: ["Indonesia", "English"],
      location: "Surabaya",
      price: 70000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Shubham Gupta",
      email: "shubhamgupta@gmail.com",
      phone: "082711212",
      password: "shubham123",
      role: "Quantitative UX Researcher",
      expertise: ["Data Science","Machine Learning","Deep Learning","Bussiness Analysis"],
      skills: ["Python", "NLP", "SQL","Neural Network"],
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
      linkedin: "https://www.linkedin.com/in/shubham-gupta-a630394b/",
      language: ["Indonesia", "English"],
      location: "Surabaya",
      price: 70000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Jimit Doshi",
      email: "jimitdoshi@gmail.com",
      phone: "082711212",
      password: "jimit123",
      role: "Senior Member Of Technical",
      expertise: ["Testing","API","Postman","AWS"],
      skills: ["Python", "NLP", "SQL","Neural Network"],
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
      linkedin: "https://www.linkedin.com/in/jimit-doshi-1072a8a2/",
      language: ["Indonesia", "English"],
      location: "Bali",
      price: 75000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Gourav Nagar",
      email: "gouravnagar@gmail.com",
      phone: "082711212",
      password: "gourav123",
      role: "Big Data Engineer",
      expertise: ["Data Engineer","Big Data"],
      skills: ["SQL", "Hadop", "AWS"],
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
      linkedin: "https://www.linkedin.com/in/gourav-nagar1/",
      language: ["Indonesia", "English"],
      location: "Bali",
      price: 75000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Pranav Shah",
      email: "pranavshah@gmail.com",
      phone: "082711212",
      password: "pranav123",
      role: "Senior Software Engineer",
      expertise: ["Frontend Developer","Website","Mobile"],
      skills: ["Javascript", "ReactJS", "NodeJS","CI/CD","NextJS","mongoDB","Typescript"],
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
      linkedin: "https://www.linkedin.com/in/shpranav/",
      language: ["Indonesia", "English"],
      location: "Bali",
      price: 75000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Saurabh Singh",
      email: "saurabhsingh@gmail.com",
      phone: "082711212",
      password: "saurabh123",
      role: "Software Developer",
      expertise: ["Fullstack Developer","Website"],
      skills: ["Java","Javascript", "ReactJS", "HTML","CSS","Angular","Microservice"],
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
      linkedin: "https://www.linkedin.com/in/singhster/",
      language: ["Indonesia", "English", "Mandarin"],
      location: "Bali",
      price: 75000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Twinkle Bajaj",
      email: "twinklebajaj@gmail.com",
      phone: "082711212",
      password: "twinkle123",
      role: "Software Developer",
      expertise: ["Fullstack Developer","Website"],
      skills: ["Java","API", "C++", "Springboot","REST","Microservice"],
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
      linkedin: "https://www.linkedin.com/in/twinkle-bajaj-903480150/",
      language: ["Indonesia", "English", "Tagalog"],
      location: "Bali",
      price: 75000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Vishal Bagla",
      email: "vishalbagla@gmail.com",
      phone: "082711212",
      password: "vishal123",
      role: "Product Management",
      expertise: ["Product Management","Design"],
      skills: ["Teamwork ","Analysis Product", "Communication"],
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
      linkedin: "https://www.linkedin.com/in/vishal-bagla/",
      language: ["Indonesia", "English", "Tagalog"],
      location: "Bali",
      price: 75000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
    {
      name: "Mukesh sablani",
      email: "mukeshsablani@gmail.com",
      phone: "082711212",
      password: "mukesh123",
      role: "Data Analyst",
      expertise: ["Data Analyst"],
      skills: ["SQL ","visualization Data", " Tableau"],
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
      linkedin: "https://www.linkedin.com/in/mukesh-sablani-9a4596184/",
      language: ["Indonesia", "English", "Tagalog"],
      location: "Bali",
      price: 75000,
      cvResume: "https://www.gogle.com",
      portopolio: "https://www.gogle.com",
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
