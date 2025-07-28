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
  { label: 'Frontend Developer', value: 'Frontend' },
  { label: 'Backend Developer', value: 'Backend' },
  { label: 'Mobile Developer', value: 'Mobile' },
  { label: 'ML & AI', value: 'Machine Learning' },
  { label: 'Blockchain', value: 'Blockchain' },
  { label: 'Cyber Security', value: 'Cyber Security' },
  { label: 'Data Analyst', value: 'Data Analyst' },
  { label: 'Data Science', value: 'Data Science' },
  { label: 'Design', value: 'Design' },
  { label: 'Quality Assurance', value: 'Quality Assurance' },
  { label: 'Game Dev', value: 'Game' },
];

const CheckBox = ({ data }) => {
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
    data({ expertise });
  };

  // Panggil ulang setiap kali selected berubah
  useEffect(() => {
    fetchMentorByExpertise(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
