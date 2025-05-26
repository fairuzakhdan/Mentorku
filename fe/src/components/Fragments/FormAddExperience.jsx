import { Box, Flex, Stack, Group, Text, Button, Span } from '@chakra-ui/react';
import FormInput from '../Elements/FormInput';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import { CheckBox } from '../Elements/FormInput';
const FormAddExperienceMentor = ({
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
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [organization, onChangeOrganization] = useInput('');
  const [major, onChangeMajor] = useInput('');
  const [company, onChangeCompany] = useInput('');
  const [position, onChangePosition] = useInput('');
  const [year, onChangeYear] = useInput('');
  const handleAddEducation = () => {
    if (!organization.trim() || !major.trim()) {
      alert('Education tidak boleh kosong');
      return;
    }
    const newOrganization = {
      organization,
      major,
    };
    const updateEducation = [...education, newOrganization];
    setEducation(updateEducation);
    addEducation(updateEducation);

    onChangeOrganization({ target: { value: '' } });
    onChangeMajor({ target: { value: '' } });
  };
  const handleAddExperience = () => {
    if (!company.trim() || !position.trim() || !year.trim()) {
      alert('Experience tidak boleh kosong');
      return;
    }
    const newExperience = {
      company,
      position,
      year,
    };

    const updateExperience = [...experience, newExperience];
    setExperience(updateExperience);
    addExperience(updateExperience);

    onChangeCompany({ target: { value: '' } });
    onChangePosition({ target: { value: '' } });
    onChangeYear({ target: { value: '' } });
  };

  const expertise = [
    { label: 'Software Engineering' },
    { label: 'Software Architect' },
    { label: 'Machine Learning Engineer' },
    { label: 'Data Scientist' },
    { label: 'Frontend Developer' },
    { label: 'Backend Developer' },
    { label: 'Fullstack Developer' },
    { label: 'Mobile Developer' },
    { label: 'DevOps' },
    { label: 'UI/UX Designer' },
    { label: 'Product Designer' },
    { label: 'UX Researcher' },
    { label: 'Data Analyst' },
    { label: 'Data Engineer' },
    { label: 'Cybersecurity Engineer' },
    { label: 'Cybersecurity Consultant' },
    { label: 'Cloud Engineer' },
    { label: 'IT Consultant' },
    { label: 'IT Support' },
    { label: 'Quality Assurance' },
    { label: 'Project Manager' },
    { label: 'Game Developer' },
    { label: 'Blockchain Developer' },
  ];
  const handleChangeExpertise = (label) => {
    const updated = valueExpertise.includes(label)
      ? valueExpertise.filter((item) => item !== label)
      : [...valueExpertise, label];
    console.log(updated);
    onExpertiseChange?.(updated);
  };
  return (
    <Box mt={5}>
      <Flex columnGap={5}>
        <Stack flex={1}>
          <FormInput
            label={'CV / Resume URL'}
            placeholder={'https://bit.ly/CV'}
            required
            onChange={onChangecV}
            value={valueCv}
          />
          <Group alignItems={'end'} mt={5}>
            <FormInput
              label={'Organization'}
              placeholder={'S1 Institut Teknologi Bandung'}
              onChange={onChangeOrganization}
              value={organization}
            />
            <FormInput
              label={'Major'}
              placeholder={'Teknologi Informasi'}
              value={major}
              onChange={onChangeMajor}
            />
            <Button onClick={handleAddEducation}>Tambah</Button>
          </Group>
          <Flex gap={3} justifyContent={'space-between'} flexWrap={'wrap'}>
            {education.map((edc, index) => (
              <Text key={index} fontSize={'xs'}>
                {edc.organization} - {edc.major}
              </Text>
            ))}
          </Flex>
        </Stack>
        <Stack flex={1}>
          <FormInput
            label={'Portofolio'}
            placeholder={'https://bit.ly/portofolio'}
            required
            value={valuePortfolio}
            onChange={onChangePortfolio}
          />
          <Group alignItems={'end'} mt={5}>
            <FormInput
              label={'Perusahaan'}
              placeholder={'Google Indonesia'}
              onChange={onChangeCompany}
              value={company}
            />
            <FormInput
              label={'Position'}
              placeholder={'Sofware Engineer'}
              value={position}
              onChange={onChangePosition}
            />
            <FormInput
              label={'Masa kerja'}
              placeholder={'5 years'}
              value={year}
              onChange={onChangeYear}
            />
            <Button onClick={handleAddExperience}>Tambah</Button>
          </Group>
          <Flex gap={3} justifyContent={'space-between'} flexWrap={'wrap'}>
            {experience.map((e, index) => (
              <Box key={index}>
                <Text fontSize={'sm'}>{e.position}</Text>
                <Text fontSize={'xs'}>
                  {e.company} - {e.year}
                </Text>
              </Box>
            ))}
          </Flex>
        </Stack>
      </Flex>
      <Box mt={5}>
        <Text mb={2}>Expertise</Text>
        <Flex flexWrap={'wrap'} gap={5}>
          {expertise.map((exp, index) => (
            <CheckBox
              key={index}
              label={exp.label}
              onChange={() => handleChangeExpertise(exp.label)}
            />
          ))}
        </Flex>
      </Box>
      <Flex mt={7} columnGap={5} alignItems={'end'}>
        <Box flex={1}>
          <FormInput
            type="text"
            label={'Posisi Pekerjaan Saat ini'}
            placeholder={'Sofware Engineer'}
            required
            value={valueCurrentPosition}
            onChange={onChangeCurrentPosition}
          />
        </Box>
        <Box flex={1}>
          <FormInput
            type="number"
            label={
              'Apakah Anda memiliki harga sewa per bulan yang ingin ditawarkan? Jika ya, mohon tulis secara jelas, misalnya: Rp500.000/bulan'
            }
            placeholder={'Rp500.000/bulan'}
            value={valuePriceSalary}
            onChange={onChangePriceSalary}
            required
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default FormAddExperienceMentor;
