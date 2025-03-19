const mongoose = require('mongoose')
const Mentor = require('../models/mentors')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL).then((result) => {
    console.log('Database Connect');
}).catch((err) => {
    console.log('Database tidak Connect',err.message);
})

async function seedMentor() {
    const mentors = [
        {
            name: "John Doe",
            email: "john@gmail.com",
            phone: "082711212",
            password: "admin12",
            skills: ['javascript','kotlin','java','microservice','react','unit test'],
            experience: [
                {
                    company: "Garuda Indonesia",
                    position: "Software Engineer",
                    years: 10
                },
                {
                    company: "Gojek",
                    position: "Fullstack Developer",
                    years: 7
                }
            ],
            expertise: ["Web", "Mobile", "Quality Assurance", "Frontend Developer"],
            education: ["Institut Teknologi Garut", "SMAN 3 Garut"],
            summary: "Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun.",
            profilePicture: {
                url: 'public/images',
                filename: 'user.jpg',
            },
            skills_certificate: [
                {
                url: 'public/images',
                filename: 'expert.jpg',
                }
            ]
        },
        {
            name: "Alexandra",
            email: "alex@gmail.com",
            phone: "082711212",
            password: "admin2",
            skills: ['Sistem Pakar','Tensor Flow','Natural Language Processing','Decision Tree'],
            experience: [
                {
                    company: "Traveloka",
                    position: "Machine Learning",
                    years: 10
                },
                {
                    company: "Tiket.com",
                    position: "Machine Learning",
                    years: 7
                }
            ],
            expertise: ["Sistem Pakar", "Data Science", "Machine Learning", "Deep Learning"],
            education: ["Institut Teknologi Garut", "SMAN 3 Garut"],
            summary: "Saya adalah seorang Machine Learning engineer dengan pengalaman lebih dari 10 tahun.",
            profilePicture: {
                url: 'public/images',
                filename: 'user.jpg',
            },
            skills_certificate: [
                {
                    url: 'public/images',
                filename: 'expert.jpg',
                }
            ]
        },
        {
            name: "Jessica",
            email: "jessica@gmail.com",
            phone: "082711212",
            password: "jessica",
            skills: ['figma','photoshop','wireframe','mockup','prototype'],
            experience: [
                {
                    company: "Uber",
                    position: "Graphic Designer",
                    years: 3
                },
                {
                    company: "Gojek",
                    position: "Graphic Designer",
                    years: 2
                }
            ],
            expertise: ["Figma", "Design", "UI/UX", "Prototype", "Frontend Developer"],
            education: ["Institut Teknologi Garut", "SMAN 3 Garut"],
            summary: "Saya adalah seorang Graphic Designer dengan pengalaman lebih dari 5 tahun.",
            profilePicture: {
                url: 'public/images',
                filename: 'user.jpg',
            },
            skills_certificate: [
                {
                    url: 'public/images',
                filename: 'expert.jpg',
                }
            ]
        },
        {
            name : "Haidar Hanif",
            email : "haidar@gmail.com",
            phone : "082711212",
            password : "haidar123",
            skills : ["React","Next Js","Typescript","Laravel","Swift"],
            experience : [ 
                {
                company : "Telkom Indonesia",
                position : "Fullstack Developer",
                years : 5
                },
                {
                company : "Indosat Ooredo",
                position : "Software Developer",
                years : 10
                }
            ],
            expertise : ["Web","Mobile","Android","Blockchain","IOS"],
            education : ["Binus University", "Apple Developer Academy"],
            summary : "Saya adalah Senior Software Engineer dengan pengalaman dalam perancangan, pengembangan, dan optimasi sistem perangkat lunak. Saya berfokus pada solusi teknologi yang efisien dan skalabel.",
              profilePicture: {
                        url: "public/images/user.jpg",
                        filename: "user.jpg"
                    },
                    skills_certificate: [
                        {
                        url: "public/images/expert.jpg",
                        filename: "expert.jpg"
                        }
                    ]
        }
    ]

    Mentor.insertMany(mentors)
        .then((result) => {
            console.log('Data seed berhasil disimpan.');
        })
        .catch((err) => {
            console.log('Data gagal disimpan:', err.message);
        });
}

seedMentor();
