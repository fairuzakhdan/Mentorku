'use client';
import Layouts from '../../components/Layouts/Layouts';
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Stack,
  Flex,
  Button,
  Group,
  Span,
} from '@chakra-ui/react';
import StepsProcess from '../../components/Fragments/Steps';
import IconColor from '../../components/Elements/IconButton';
import { BsInfoCircleFill } from 'react-icons/bs';
import FormInput from '../../components/Elements/FormInput';
import { FormSelect } from '../../components/Elements/FormInput';
import { PasswordInput } from '@/components/ui/password-input';
import FormAddProfileMentor from '../../components/Fragments/FormAddProfile';
import FormAddAboutMentor from '../../components/Fragments/FormAddAbout';
import FormAddExperienceMentor from '../../components/Fragments/FormAddExperience';
import useInput from '../../hooks/useInput';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createMentor } from '../../utils/mentors';

const AddProfileContent = ({ formState }) => {
  const {
    name,
    onChangeName,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    date,
    onChangeDate,
    location,
    onChangeLocation,
    phone,
    onChangePhone,
  } = formState;
  return (
    <Box>
      <Group
        alignItems={'start'}
        backgroundColor={'blue.100'}
        p={3}
        rounded={'lg'}
        columnGap={3}
        mt={3}
      >
        <BsInfoCircleFill color="gray" size={40} />
        <Box fontSize={'sm'}>
          <Text>Senang melihat Anda!</Text>
          <Text mb={3}>
            Mengisi formulir hanya membutuhkan waktu beberapa menit. Kami ingin mempelajari lebih
            lanjut tentang latar belakang Anda dan seluk beluk mengapa Anda ingin menjadi seorang
            mentor. Jaga hal-hal pribadi dan bicarakan langsung dengan kami dan mentee Anda. Kami
            tidak membutuhkan jargon dan surat pengantar yang dipoles di sini!
          </Text>
          <Text>
            Anda menyetujui kode etik kami dan perjanjian mentor dengan mengirimkan formulir, jadi
            pastikan untuk melihatnya.
          </Text>
        </Box>
      </Group>
      <FormAddProfileMentor
        phone={phone}
        onChangePhone={onChangePhone}
        name={name}
        onChangeName={onChangeName}
        email={email}
        onChangeEmail={onChangeEmail}
        password={password}
        onChangePassword={onChangePassword}
        date={date}
        onChangeDate={onChangeDate}
        location={location}
        onChangeLocation={onChangeLocation}
      />
    </Box>
  );
};

const AddAboutContent = ({
  valueLanguage,
  setLanguage,
  valueLinkedIn,
  valueSummary,
  onSkillsChange,
  onChangeLinkedIn,
  onChangeSummary,
  skills,
}) => {
  return (
    <Box>
      <Text fontSize={'sm'} my={3}>
        Harap pastikan bahwa pengalaman Anda sesuai dengan keahlian yang Anda miliki.
      </Text>
      <FormAddAboutMentor
        valueLanguage={valueLanguage}
        setLanguage={setLanguage}
        valueLinkedIn={valueLinkedIn}
        valueSummary={valueSummary}
        onChangeLinkedIn={onChangeLinkedIn}
        onChangeSummary={onChangeSummary}
        skills={skills}
        onSkillsChange={onSkillsChange}
      />
    </Box>
  );
};

const AddExperienceContent = ({
  valueCv,
  onChangecV,
  valuePortfolio,
  onChangePortfolio,
  addEducation,
  addExperience,
  valueExpertise,
  onExpertiseChange,
  valueCurrentPosition,
  onChangeCurrentPosition,
  valuePriceSalary,
  onChangePriceSalary,
}) => {
  return (
    <Box>
      <FormAddExperienceMentor
        valueExpertise={valueExpertise}
        onExpertiseChange={onExpertiseChange}
        valueCv={valueCv}
        onChangecV={onChangecV}
        valuePortfolio={valuePortfolio}
        onChangePortfolio={onChangePortfolio}
        addEducation={addEducation}
        addExperience={addExperience}
        valueCurrentPosition={valueCurrentPosition}
        onChangeCurrentPosition={onChangeCurrentPosition}
        valuePriceSalary={valuePriceSalary}
        onChangePriceSalary={onChangePriceSalary}
      />
    </Box>
  );
};

const AddMentorpage = () => {
  const navigate = useNavigate();
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [date, onChangeDate] = useInput('');
  const [location, onChangeLocation] = useInput('');
  const [summary, onChangeSummary] = useInput('');
  const [linkedIn, onChangeLinkedIn] = useInput('');
  const [phone, onChangePhone] = useInput('');
  const [language, setLanguage] = useState([]);
  const [skills, setSkills] = useState([]);
  const [valueExpertise, setExpertise] = useState([]);

  const [valueCv, onChangecV] = useInput('');
  const [valuePortfolio, onChangePortfolio] = useInput('');
  const [valueCurrentPosition, onChangeCurrentPosition] = useInput('');
  const [valuePriceSalary, onChangePriceSalary] = useInput('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const educationHandler = (education) => {
    setEducation(education);
  };

  const experienceHandler = (experience) => {
    setExperience(experience);
  };

  const formState = {
    name,
    onChangeName,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    date,
    onChangeDate,
    location,
    onChangeLocation,
    phone,
    onChangePhone,
  };
  const aboutValue = {
    valueLanguage: language,
    setLanguage,
    valueLinkedIn: linkedIn,
    onChangeLinkedIn,
    valueSummary: summary,
    onChangeSummary,
    skills,
    onSkillsChange: setSkills,
  };

  const steps = [
    {
      title: 'Profil',
      description: 'Kenali siapa dirimu, Lengkapi informasi dasar seperti nama, email dan password',
      content: <AddProfileContent formState={formState} />,
    },
    {
      title: 'Tentang Kamu',
      description:
        'Latar belakang pendidikan, keahlian, serta nilai-nilai yang membentuk dirimu saat ini.',
      content: <AddAboutContent {...aboutValue} />,
    },
    {
      title: 'Pengalaman',
      description:
        'Bagikan pengalaman kerja, posisi pekerjaan, atau kegiatan relevan yang menunjukkan kemampuan dan kontribusimu.',
      content: (
        <AddExperienceContent
          addEducation={educationHandler}
          addExperience={experienceHandler}
          valueCv={valueCv}
          onChangecV={onChangecV}
          valuePortfolio={valuePortfolio}
          onChangePortfolio={onChangePortfolio}
          valueExpertise={valueExpertise}
          onExpertiseChange={setExpertise}
          valueCurrentPosition={valueCurrentPosition}
          onChangeCurrentPosition={onChangeCurrentPosition}
          valuePriceSalary={valuePriceSalary}
          onChangePriceSalary={onChangePriceSalary}
        />
      ),
    },
  ];
  const addMentorHandler = () => {
    const image = {
      url: date,
    };
    const mentorData = {
      phone,
      name,
      email,
      password,
      profilePicture: image,
      location,
      summary,
      linkedin: linkedIn,
      language,
      skills,
      education,
      experience,
      cvResume: valueCv,
      portopolio: valuePortfolio,
      expertise: valueExpertise,
      role: valueCurrentPosition,
      price: valuePriceSalary,
    };
    console.log(mentorData);
    createMentor(mentorData)
      .then(({ error, message }) => {
        if (error) {
          alert(message);
        } else {
          alert('Anda Berhasil Daftar Sebagai Mentor, tunggu informasi selanjutnya');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    navigate('/');
  };
  return (
    <Layouts>
      <Box color={'gray.600'} mt={5}>
        <Text fontSize={'3xl'} fontWeight={'semibold'}>
          Apply as a Mentor
        </Text>
        <Box mt={5}>
          <StepsProcess steps={steps} onClick={addMentorHandler} />
        </Box>
      </Box>
    </Layouts>
  );
};

export default AddMentorpage;
