import FormInput from '../../../components/Elements/FormInput';
import useInput from '../../../hooks/useInput';
import { FormTextArea } from '../../../components/Elements/FormInput';
import { useState, useEffect } from 'react';
import UploadFile from '../../../components/Elements/FileUpload';
import { Box, Flex, Button, Stack, Group, Text } from '@chakra-ui/react';
const FormMentorAdmin = ({ type = 'add', initialData = {}, onSubmit }) => {
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');
  const [name, onChangeName, setName] = useInput('');
  const [role, onChangeRole, setRole] = useInput('');
  const [location, onChangeLocation, setLocation] = useInput('');
  const [price, onChangePrice, setPrice] = useInput('');
  const [expertise, setExpertise] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    if (type === 'edit') {
      setEmail(initialData.email || '');
      setPassword(initialData.password || '');
      setName(initialData.name || '');
      setRole(initialData.role || '');
      setLocation(initialData.location || '');
      setPrice(initialData.price || '');
      setExpertise(initialData.expertise || []);
      setSkills(initialData.skills || []);
      setExperience(initialData.experience || []);
      setEducations(initialData.education || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);
  const handleExpertise = (e, index, field) => {
    const updateExpertise = [...expertise];
    updateExpertise[index][field] = e.target.value;
    setExpertise(updateExpertise);
  };
  const handleSkills = (e, index, field) => {
    const updateSkills = [...skills];
    updateSkills[index][field] = e.target.value;
    setSkills(updateSkills);
  };
  const handleExperience = (e, index, field) => {
    const updateExperience = [...experience];
    updateExperience[index][field] = e.target.value;
    setExperience(updateExperience);
  };
  const handleEducations = (e, index, field) => {
    const updateEducations = [...educations];
    updateEducations[index][field] = e.target.value;
    setEducations(updateEducations);
  };
  const handleSubmit = () => {
    if (type === 'add') {
      onSubmit({
        email,
        password,
        name,
        role,
        location,
        price,
      });
    }
    if (type === 'edit') {
      onSubmit({
        email,
        password,
        name,
        role,
        location,
        price,
        expertise,
        skills,
        experience,
        educations,
      });
    }
  };
  return (
    <Stack rowGap={7}>
      <Flex columnGap={5}>
        <FormInput
          label={'Add Email Mentor'}
          placeholder={'Enter mentor email'}
          type="email"
          value={email}
          onChange={onChangeEmail}
        />

        <FormInput
          label={'Add Password Mentor'}
          placeholder={'Enter mentor password'}
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </Flex>
      <Flex columnGap={5}>
        <FormInput
          label={'Add Name Mentor'}
          placeholder={'Enter mentor name'}
          type="text"
          value={name}
          onChange={onChangeName}
        />
        <FormInput
          label={'Add Role Mentor'}
          placeholder={'Enter Role mentor'}
          type="text"
          value={role}
          onChange={onChangeRole}
        />
      </Flex>
      <Flex columnGap={5}>
        <FormTextArea
          label={'Add Location Mentor'}
          placeholder={'Enter Location mentor'}
          value={location}
          onChange={onChangeLocation}
        />
        <FormInput
          label={'Add Price Mentor'}
          placeholder={'Enter Price mentor (Rp.500.000/month)'}
          type="number"
          value={price}
          onChange={onChangePrice}
        />
      </Flex>
      {type === 'edit' && (
        <>
          <Flex columnGap={5}>
            <Flex
              bgColor={'white'}
              justifyContent={'space-between'}
              gap={5}
              flexWrap={'wrap'}
              p={2}
              rounded={'md'}
              flex={1}
            >
              {expertise.map((exp, index) => (
                <Group key={index}>
                  <FormInput
                    label={'Edit Expertise Mentor'}
                    placeholder={'Enter Expertise mentor '}
                    type="text"
                    value={exp.expertise}
                    onChange={(e) => handleExpertise(e, index, 'expertise')}
                  />
                </Group>
              ))}
            </Flex>
            <Flex flex={1}>
              <Flex
                bgColor={'white'}
                justifyContent={'space-between'}
                gap={5}
                flexWrap={'wrap'}
                p={2}
                rounded={'md'}
                flex={1}
              >
                {skills.map((skill, index) => (
                  <Group key={index}>
                    <FormInput
                      label={'Edit Skill Mentor'}
                      placeholder={'Enter Skill mentor'}
                      type="text"
                      value={skill.skills}
                      onChange={(e) => handleSkills(e, index, 'skills')}
                    />
                  </Group>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex columnGap={5}>
            <Flex flexWrap={'wrap'} gap={5} flex={1}>
              {experience.map((exp, index) => (
                <Group key={index} bgColor={'white'} p={2} rounded={'md'} alignItems={'flex-end'}>
                  <Text>Experience</Text>
                  <FormInput
                    label={'Edit  Company'}
                    placeholder={'Enter Company '}
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleExperience(e, index, 'company')}
                  />
                  <FormInput
                    label={'Edit  Position'}
                    placeholder={'Enter Position '}
                    type="text"
                    value={exp.position}
                    onChange={(e) => handleExperience(e, index, 'position')}
                  />
                  <FormInput
                    label={'Edit  Year'}
                    placeholder={'Enter Year'}
                    type="text"
                    value={exp.years}
                    onChange={(e) => handleExperience(e, index, 'years')}
                  />
                </Group>
              ))}
            </Flex>
            <Flex flexWrap={'wrap'} gap={5} flex={1}>
              {educations.map((edu, index) => (
                <Group key={index} bgColor={'white'} p={2} rounded={'md'} alignItems={'flex-end'}>
                  <Text>Education</Text>
                  <FormInput
                    label={'Edit organization'}
                    placeholder={'Enter organization'}
                    type="text"
                    value={edu.organization}
                    onChange={(e) => handleEducations(e, index, 'organization')}
                  />
                  <FormInput
                    label={'Edit Major'}
                    placeholder={'Enter Major'}
                    type="text"
                    value={edu.major}
                    onChange={(e) => handleEducations(e, index, 'major')}
                  />
                </Group>
              ))}
            </Flex>
          </Flex>
        </>
      )}
      <Button
        colorPalette={'teal'}
        width={'fit-content'}
        alignSelf={'flex-end'}
        onClick={handleSubmit}
      >
        {type === 'add' ? 'Add Mentor' : 'Edit Mentor'}
      </Button>
    </Stack>
  );
};

export default FormMentorAdmin;
