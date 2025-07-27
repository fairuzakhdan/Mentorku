import { useEffect, useState } from 'react';
import { CheckboxCard, HStack } from '@chakra-ui/react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Daftar bidang keahlian mentor
const expertiseMentor = [
  { label: 'UI/UX Design', value: 'UI/UX Design' },
  { label: 'Software Engineer', value: 'Software Engineer' },
  { label: 'Frontend Developer', value: 'Frontend Developer' },
  { label: 'Backend Developer', value: 'Backend Developer' },
  { label: 'Mobile Developer', value: 'Mobile Developer' },
  { label: 'ML & AI', value: 'Machine Learning' },
  { label: 'Blockchain', value: 'Blockchain Developer' },
  { label: 'Cyber Security', value: 'Cyber Security' },
  { label: 'Data Analyst', value: 'Data Analyst' },
  { label: 'Data Science', value: 'Data Science' },
  { label: 'Design', value: 'Design' },
  { label: 'Quality Assurance', value: 'Quality Assurance' },
  { label: 'Game Dev', value: 'Game Developer' },
];

const CheckBox = () => {
  const [selected, setSelected] = useState([]);

  // Fungsi saat checkbox diklik
  const onChangeExpert = (value) => {
    setSelected(
      (prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value) // hapus jika sudah ada
          : [...prev, value], // tambah jika belum ada
    );
  };

  // Fungsi untuk fetch/filter mentor dari database (atau lokal)
  const fetchMentorByExpertise = async (expertise) => {
    const filter = expertise.length > 0 ? { expertise: { $in: expertise } } : {}; // jika kosong, tampilkan semua

    console.log('QUERY FILTER:', filter);

    // Contoh: jika pakai API
    // const res = await fetch('/api/mentors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(filter),
    // });
    // const data = await res.json();
    // console.log('Mentor Result:', data);
  };

  // Panggil ulang setiap kali selected berubah
  useEffect(() => {
    fetchMentorByExpertise(selected);
  }, [selected]);

  return (
    <HStack w="100%">
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        mousewheel
        modules={[Pagination, Mousewheel]}
        style={{ width: '100%' }}
      >
        {expertiseMentor.map((exp) => {
          const isActive = selected.includes(exp.value);

          return (
            <SwiperSlide key={exp.value}>
              <CheckboxCard.Root
                size="sm"
                variant="solid"
                colorPalette="teal"
                onCheckedChange={() => onChangeExpert(exp.value)}
                sx={{
                  borderColor: isActive ? 'teal.500' : 'gray.200',
                  bg: isActive ? 'teal.100' : 'white',
                }}
              >
                <CheckboxCard.HiddenInput value={exp.value} />
                <CheckboxCard.Control>
                  <CheckboxCard.Label>{exp.label}</CheckboxCard.Label>
                </CheckboxCard.Control>
              </CheckboxCard.Root>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </HStack>
  );
};

export default CheckBox;
