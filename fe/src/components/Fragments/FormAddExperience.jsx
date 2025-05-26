import { Box, Flex, Stack, Group, Text, Button, Span } from '@chakra-ui/react';
import FormInput from '../Elements/FormInput';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
const FormAddExperienceMentor = ({ onChangecV, valueCv }) => {
  const [education, setEducation] = useState([]);
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
    setEducation((prev) => {
      return [...prev, newOrganization];
    });
    onChangeOrganization({ target: { value: '' } });
    onChangeMajor({ target: { value: '' } });
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
          <FormInput label={'Portofolio'} placeholder={'https://bit.ly/portofolio'} required />
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
      </Flex>
    </Box>
  );
};

export default FormAddExperienceMentor;
