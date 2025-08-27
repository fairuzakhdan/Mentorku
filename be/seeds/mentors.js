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
      phone: "082714512",
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
      expertise: ["Web Developer", "Mobile Developer", "Backend Developer"],
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
        url: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww",
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
        url: "https://images.unsplash.com/photo-1636368086488-bb2c04738214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODA3fHx0ZWFjaGVyfGVufDB8fDB8fHww",
        filename: "user.jpg",
      },
    },
    {
      name: "Vineet Maheshwari",
      email: "vineetmaheshwari@gmail.com",
      phone: "0827116212",
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
          position: "Data Analyst",
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
        "Data Analyst",
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
        url: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww",
        filename: "user.jpg",
      },
    },
    {
      name: "Gourav Rusiya",
      email: "gouravrusiya@gmail.com",
      phone: "0827181212",
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
        url: "https://plus.unsplash.com/premium_photo-1661594668193-3f105ef4ce8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQxfHxlbnRlcHJlbmV1cnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Harshit Goyal",
      email: "harshitgoyal@gmail.com",
      phone: "0827117212",
      password: "harshit123",
      skills: ["SQL", "python", "APIs", "C++", "Graphql"],
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
      expertise: ["Backend Developer", "Web Developer"],
      education: [
        {
          organization: "Institut Teknologi Bandung",
          major: "S2 Computer Science",
        },
      ],
      summary:
        "Saya adalah Software Engineer dengan pengalaman dalam perancangan, pengembangan, dan optimasi sistem perangkat lunak. Saya berfokus pada solusi teknologi yang efisien dan skalabel.",
      profilePicture: {
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
        filename: "user.jpg",
      },
    },
    {
      name: "Vivek Parmar",
      email: "vivekparmar@gmail.com",
      phone: "08271412612",
      password: "vivek123",
      role: "DevOps Engineer",
      expertise: ["DevOps", "Deployement", "Cloud", "Backend Developer"],
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
        url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
        filename: "user.jpg",
      },
    },
    {
      name: "Ankit Raj",
      email: "ankitraj@gmail.com",
      phone: "0827115212",
      password: "ankit123",
      role: "Quality Assurance",
      expertise: ["Backend Developer", "Automated Testing"],
      skills: [
        "SQL",
        "Python",
        "Docker",
        "Javascript",
        "ReactJS",
        "NodeJS",
        "Typescript",
      ],
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
        url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
        filename: "user.jpg",
      },
    },
    {
      name: "Shubham Gupta",
      email: "shubhamgupta@gmail.com",
      phone: "082711212",
      password: "shubham123",
      role: "Quantitative UX Researcher",
      expertise: [
        "Data Science",
        "Machine Learning",
        "Deep Learning",
        "Bussiness Analyst",
      ],
      skills: ["Python", "NLP", "SQL", "Neural Network"],
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
        url: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww",
        filename: "user.jpg",
      },
    },
    {
      name: "Jimit Doshi",
      email: "jimitdoshi@gmail.com",
      phone: "0827117212",
      password: "jimit123",
      role: "Senior Member Of Technical",
      expertise: ["Testing", "API", "Postman", "AWS"],
      skills: ["Python", "NLP", "SQL", "Neural Network"],
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
      price: 85000,
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
        url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Gourav Nagar",
      email: "gouravnagar@gmail.com",
      phone: "0827112512",
      password: "gourav123",
      role: "Big Data Engineer",
      expertise: ["Data Engineer", "Big Data"],
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
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Pranav Shah",
      email: "pranavshah@gmail.com",
      phone: "0827112812",
      password: "pranav123",
      role: "Senior Software Engineer",
      expertise: ["Frontend Developer", "Website", "Mobile"],
      skills: [
        "Javascript",
        "ReactJS",
        "NodeJS",
        "CI/CD",
        "NextJS",
        "mongoDB",
        "Typescript",
      ],
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
        url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
        filename: "user.jpg",
      },
    },
    {
      name: "Saurabh Singh",
      email: "saurabhsingh@gmail.com",
      phone: "08271192182",
      password: "saurabh123",
      role: "Software Developer",
      expertise: ["Fullstack Developer", "Website"],
      skills: [
        "Java",
        "Javascript",
        "ReactJS",
        "HTML",
        "CSS",
        "Angular",
        "Microservice",
      ],
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
      price: 85000,
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
        url: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Twinkle Bajaj",
      email: "twinklebajaj@gmail.com",
      phone: "08257841212",
      password: "twinkle123",
      role: "Software Developer",
      expertise: ["Fullstack Developer", "Website"],
      skills: ["Java", "API", "C++", "Springboot", "REST", "Microservice"],
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
      price: 95000,
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
        url: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Vishal Bagla",
      email: "vishalbagla@gmail.com",
      phone: "0824112412",
      password: "vishal123",
      role: "Product Management",
      expertise: ["Product Management", "Design"],
      skills: ["Teamwork ", "Analyst Product", "Communication"],
      experience: [
        {
          company: "Telkom Indonesia",
          position: "Fullstack Developer",
          years: 15,
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
          major: "S1 Computer Science",
        },
      ],
      summary:
        "Saya adalah Software Engineer dengan pengalaman dalam perancangan, pengembangan, dan optimasi sistem perangkat lunak. Saya berfokus pada solusi teknologi yang efisien dan skalabel.",
      profilePicture: {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Mukesh sablani",
      email: "mukeshsablani@gmail.com",
      phone: "0827141212",
      password: "mukesh123",
      role: "Data Analyst",
      expertise: ["Data Analyst"],
      skills: ["SQL ", "visualization Data", " Tableau"],
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
        url: "https://images.unsplash.com/photo-1519713880332-91cfe19a59dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Souren Hazra",
      email: "sourenhazra@gmail.com",
      phone: "082711212",
      password: "souren123",
      role: "Software Engineer",
      expertise: ["Backend Developer", "Website", "Software Engineer"],
      skills: ["Python ", "APIs", " Django", "mySQL", "System design", "REST"],
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
      linkedin: "https://www.linkedin.com/in/souren-hazra-b0687895/",
      language: ["Indonesia", "English", "Tagalog"],
      location: "Bali",
      price: 85000,
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
        url: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Piyush Khushlani",
      email: "PiyushKhushlani@gmail.com",
      phone: "0827115212",
      password: "Piyush123",
      role: "Application Engineer ",
      expertise: ["Backend Developer", "Website"],
      skills: ["Python ", "Java", "Kafka", "APIs"],
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
      linkedin: "https://www.linkedin.com/in/piyush-khushlani/",
      language: ["Indonesia", "English", "Tagalog"],
      location: "Bali",
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
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Durgesh Yadav",
      email: "durgeshyadav@gmail.com",
      phone: "0827114212",
      password: "durgesh123",
      role: "Data Analyst",
      expertise: ["Data Analyst", "Data Science", "Machine Learning"],
      skills: [
        "SQL ",
        "Data Visualization",
        "Cleansing",
        "Tableau",
        "Tensor Flow",
      ],
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
      linkedin: "https://www.linkedin.com/in/durgeshyadavdatacity/",
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
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Rishi Agrawal",
      email: "rishiagrawal@gmail.com",
      phone: "082711212",
      password: "rishi123",
      role: "Fullstack Developer",
      expertise: ["Fullstack Developer", "Software Engineer"],
      skills: ["C++ ", "Python", "Javascript", "NodeJS", "HTML", "CSS"],
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
      linkedin: "https://www.linkedin.com/in/rishi2907/",
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
        url: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Krunalkumar Shah",
      email: "krunalkumarshah@gmail.com",
      phone: "082711212",
      password: "krunalkumar123",
      role: "Teaching Assistant",
      expertise: ["Cyber security ", "Penetration Testing"],
      skills: ["Application Security ", "NMap", "Kriptografi"],
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
      linkedin: "https://www.linkedin.com/in/realkrunalkumar/",
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
        url: "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Rogier van der Heide🇱🇮",
      email: "rogiervanderheide🇱🇮@gmail.com",
      phone: "082711212",
      password: "rogier123",
      role: "UI/UX Design",
      expertise: ["UX Design", "UI Design", "UI/UX Design", "Design"],
      skills: [
        "Design",
        "Figma",
        "Prototype",
        "User Research",
        "Visual Design",
      ],
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
      linkedin: "https://www.linkedin.com/rogiervanderheide🇱🇮/",
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
        url: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Jessica",
      email: "jessica@gmail.com",
      phone: "082711212",
      password: "jessica123",
      role: "UI/UX Design",
      expertise: ["UX Design", "UI Design", "UI/UX Design", "Design", "Design"],
      skills: ["Design", "Figma", "Visual Design"],
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
      linkedin: "https://www.linkedin.com/jessica/",
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
        url: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "082711212",
      password: "john123",
      role: "Blockchain Developer",
      expertise: [
        "Smart Contract",
        "Blockchain",
        "Kriptografi",
        "Web3",
        "Crypto",
      ],
      skills: [
        "Solidity",
        "Rust",
        "Ganache",
        "Ether.js",
        "Foundry",
        "Hardhat",
        "Web3.js",
      ],
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
      linkedin: "https://www.linkedin.com/jessica/",
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
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Anarghya Kini",
      email: "anarghya@gmail.com",
      phone: "082711212",
      password: "anarghya123",
      role: "Machine Learning Engineer",
      expertise: ["Machine Learning", "AI/ML", "AI Engineer", "Data Engineer"],
      skills: [
        "Tableau",
        "Python",
        "Tensorflow",
        "Testing",
        "Deep Learning",
        "SQL",
      ],
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
      linkedin: "https://www.linkedin.com/anarghya/",
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
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Subhahu Jain",
      email: "subhahu@gmail.com",
      phone: "082711212",
      password: "subhahu123",
      role: "AI Engineer",
      expertise: [
        "Machine Learning",
        "AI/ML",
        "AI Engineer",
        "Data Engineer",
        "Computer Vision",
      ],
      skills: ["Python", "Tensorflow", "Testing", "SQL"],
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
      linkedin: "https://www.linkedin.com/subhahu/",
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
        url: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Sumit S",
      email: "sumit@gmail.com",
      phone: "082711212",
      password: "sumit123",
      role: "Security Analyst",
      expertise: [
        "Kriptografi",
        "Cyber Security",
        "Security Analyst",
        "Penetration Testing",
      ],
      skills: ["Python", "Java", "Testing", "Nmap", "Linux", "Ethical Hacking"],
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
      linkedin: "https://www.linkedin.com/in/sumits22/",
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
        url: "https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Duc Duy Bui",
      email: "duc@gmail.com",
      phone: "082711212",
      password: "duc123",
      role: "UX Design",
      expertise: ["UI/UX Design", "Design", "UX Research", "UI Desgin"],
      skills: ["Figma", "Prototype", "Adobe Photoshop"],
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
      linkedin: "https://www.linkedin.com/in/duc/",
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
        url: "https://plus.unsplash.com/premium_photo-1673287635678-8d812deb4fc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Rajha Rajesuwari",
      email: "rajha@gmail.com",
      phone: "082711212",
      password: "rajha123",
      role: "Chief Technology Officer",
      expertise: [
        "Software Engineer",
        "Software Developer",
        "Quality Assurance",
        "Frontend",
        "Backend",
        "Fullstack",
        "Mobile",
        "Web",
      ],
      skills: [
        "Javascript",
        "Typescript",
        "Java",
        "Testing",
        "ReactJS",
        "Express",
        "Mysql",
        "Postgress",
        "NextJS",
        "Laravel",
      ],
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
      linkedin: "https://www.linkedin.com/in/rajha/",
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
        url: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Yuriy Linnyk",
      email: "yuriy@gmail.com",
      phone: "082711212",
      password: "yuriy123",
      role: "Game Developer",
      expertise: [
        "Game Designer",
        "Game Artist",
        "Game Developer",
        "UX Researcher",
      ],
      skills: ["Unity Engine", "Adobe Flash", "Blender"],
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
      linkedin: "https://www.linkedin.com/in/yuriy/",
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
        url: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Abdelfettah Besbes",
      email: "abdelfettah@gmail.com",
      phone: "082711212",
      password: "abdelfettah123",
      role: "Designer",
      expertise: [
        "Game Designer",
        "Game Artist",
        "UX Researcher",
        "Game Developer",
        "UI/UX Designer",
        "Design",
      ],
      skills: ["Unity Engine", "Adobe Flash", "Blender"],
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
      linkedin: "https://www.linkedin.com/in/abdelfettah/",
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
        url: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        filename: "user.jpg",
      },
    },
    {
      name: "Md. Najmul Hasan",
      email: "najmul@gmail.com",
      phone: "082711212",
      password: "najmul123",
      role: "Data Science",
      expertise: [
        "Data Science",
        "Data Analyst",
        "Data Engineer",
        "Machine Learning",
        "AI/ML",
        "Big Data",
      ],
      skills: [
        "Rapid Miner",
        "Python",
        "Google Collab",
        "Tensorflow",
        "Tableau",
      ],
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
      linkedin: "https://www.linkedin.com/in/najmul/",
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
        url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
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
