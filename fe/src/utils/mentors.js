import { SiPeakdesign } from 'react-icons/si';
import { api } from './api';

// const api = 'http://localhost:3000/api';

export const getAllMentor = async () => {
  const response = await fetch(`${api}/mentors`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

export const getMentorById = async (id) => {
  const response = await fetch(`${api}/mentors/${id}`);
  const responseJson = await response.json();
  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.data };
};

const mentors = [
  {
    id: '1',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
    role: 'UI/UX Designer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch'],
    price: 85000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://ww.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '2',
    email: 'example@gmail.com',
    password: 'password12',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1636368086488-bb2c04738214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODA3fHx0ZWFjaGVyfGVufDB8fDB8fHww',
    role: 'Machine Learning Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Figma', 'Adobe XD', 'Sketch'],
    price: 70000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.gogle.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '3',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
    role: 'Software Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    price: 75000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '4',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://plus.unsplash.com/premium_photo-1661594668193-3f105ef4ce8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQxfHxlbnRlcHJlbmV1cnxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Software Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    price: 75000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '5',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Software Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    price: 75000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '6',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
    role: 'Software Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    price: 75000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '7',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    role: 'Software Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    price: 75000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '8',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww',
    role: 'Software Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    price: 75000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '9',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Software Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    price: 75000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
  {
    id: '10',
    email: 'example@gmail.com',
    password: 'password123',
    linkedIn: 'https://www.google.com',
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    role: 'Software Engineer',
    experience: [
      {
        company: 'Google',
        position: 'UI/UX Designer',
        years: '5 years',
      },
      {
        company: 'Amazon Web Service',
        position: 'Fullstack   Developer',
        years: '10 years',
      },
    ],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop'],
    price: 75000,
    language: ['Indonesia', 'English'],
    location: 'Jakarta',
    education: [
      {
        organization: 'Institut Teknologi Bandung',
        major: 'S2 Computer Science',
      },
      {
        organization: 'Institut Teknologi Garut',
        major: 'S1 Teknik Informatika',
      },
      {
        organization: 'SMAN 1 Garut',
        major: 'IPA',
      },
    ],
    expertise: ['Web', 'Mobile', 'Blockchain', 'IOS'],
    portofolio: 'https://www.google.com/sdaw',
    cvResume: 'https://www.google.com',
    summary:
      'Saya adalah seorang software engineer dengan pengalaman lebih dari 7 tahun. Saya memiliki kemampuan dalam membangun aplikasi web dan mobile. Saya juga memiliki kemampuan dalam membangun aplikasi web dan mobile.',
  },
];

const boxes = [
  {
    id: 1,
    title: 'Introductory Call',
    description:
      'If you"re looking for a mentor, and you" re just not sure about how this all works – this should be for you. In a casual, informal introductory call, a mentor will introduce themselves ...',
    price: '30',
    time: '45',
  },
  {
    id: 2,
    title: 'Study Plan',
    description:
      'Looking to learn a new skill? The vast amount of resources on any topic on the internet can feel overwhelming at times. A mentor can give you an overview of worthwhile ..',
    price: '30',
    time: '30',
  },
  {
    id: 3,
    title: 'Interview Preparation',
    description:
      'Some big interviews coming up? In this 1-hour session, a mentor with hiring experience will act as a technical interviewer and ask you some standard hiring questions ...',
    price: '45',
    time: '30',
  },
];

const mentees = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Design Mentee',
    description:
      'has been supporting me with a software engineering job hunt and has provided amazing value with his industry knowledge, tips unique to my situation and support as I prepared for my interviews and applications.',
    image:
      'https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/0173f11442a3f4bdbbf5d143e82f5989/27e9b1f123d9fa5c/f98fd004c02b6c4342ca73650723db36.jpg',
  },
  {
    id: 1,
    name: 'John Doe',
    role: 'Design Mentee',
    description:
      'has been supporting me with a software engineering job hunt and has provided amazing value with his industry knowledge, tips unique to my situation and support as I prepared for my interviews and applications.',
    image:
      'https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/0173f11442a3f4bdbbf5d143e82f5989/27e9b1f123d9fa5c/f98fd004c02b6c4342ca73650723db36.jpg',
  },
  {
    id: 1,
    name: 'John Doe',
    role: 'Design Mentee',
    description:
      'has been supporting me with a software engineering job hunt and has provided amazing value with his industry knowledge, tips unique to my situation and support as I prepared for my interviews and applications.',
    image:
      'https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/0173f11442a3f4bdbbf5d143e82f5989/27e9b1f123d9fa5c/f98fd004c02b6c4342ca73650723db36.jpg',
  },
  {
    id: 1,
    name: 'John Doe',
    role: 'Design Mentee',
    description:
      'has been supporting me with a software engineering job hunt and has provided amazing value with his industry knowledge, tips unique to my situation and support as I prepared for my interviews and applications.',
    image:
      'https://cdn.mentorcruise.com/cdn-cgi/image/width=128,format=auto/https://cdn.mentorcruise.com/cache/0173f11442a3f4bdbbf5d143e82f5989/27e9b1f123d9fa5c/f98fd004c02b6c4342ca73650723db36.jpg',
  },
];
const ids = ['5b0b6f5c-8c13-4b25-a1c3-4882708e6e99', 'ea2246f8-e82e-4267-9713-62c04fd6e53d'];
export const paymentMentor = {
  mentorId: [
    {
      id: ids[Math.floor(Math.random() * ids.length)],
      name: 'John Doe',
      role: 'UI/UX Designer',
      image:
        'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww',
      price: 75000,
    },
  ],
  totalPrice: 75000,
  schedules: [
    { days: 'Senin', time: '08.00 - 10.00' },
    { days: 'Rabu', time: '20.00 - 10.00' },
  ],
};

export const methodPayments = [
  {
    images:
      'https://jasalogocepat.com/wp-content/uploads/2023/09/Logo-Bank-BCA-PNG-Transparan-jasalogocepat.png',
    name: 'bca',
  },
  {
    images: 'https://ver02.rumahpiatu.org/wp-content/uploads/2020/04/logo-mandiri.png',
    name: 'mandiri',
  },
  {
    images:
      'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png',
    name: 'bni',
  },
  {
    images: 'https://www.axway.com/sites/default/files/customers/Permata_Bank_logo_500x225_0.png',
    name: 'permatabank',
  },
  {
    images:
      'https://i0.wp.com/umsu.ac.id/berita/wp-content/uploads/2024/07/cara-lihat-nomor-gopay-di-aplikasi-gojek.webp?fit=850%2C510&ssl=1',
    name: 'gopay',
  },
  {
    images:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png',
    name: 'qris',
  },
  {
    images: 'https://upload.wikimedia.org/wikipedia/id/e/e8/ATM_Bersama_2016.png',
    name: 'atmbersama',
  },
];
export { mentors, boxes, mentees };
