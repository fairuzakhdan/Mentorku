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
  const [status, onChangeStatus, setStatus] = useInput('');
  const [phone, onChangePhone, setPhone] = useInput('');
  const [summary, onChangeSummary, setSummary] = useInput('');
  const [language, onChangeLanguage, setLanguage] = useInput('');
  const [skill, onChangeSkill, setSkill] = useInput('');
  const [expert, onChangeExpert, setExpert] = useInput('');
  const [linkedin, onChangeLinkedin, setLinkedin] = useInput('');
  const [company, onChangeCompany] = useInput('');
  const [position, onChangePosition] = useInput('');
  const [cvResume, onChangeCvResume, setCvResume] = useInput('');
  const [portopolio, onChangePortopolio, setPortopolio] = useInput('');
  const [years, onChangeYears] = useInput('');
  const [organization, onChangeOrganization] = useInput('');
  const [major, onChangeMajor] = useInput('');
  const [expertise, setExpertise] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    if (type === 'edit' && initialData) {
      setEmail(initialData.email || '');
      setPassword(initialData.password || '');
      setName(initialData.name || '');
      setRole(initialData.role || '');
      setLocation(initialData.location || '');
      setPrice(initialData.price || '');
      setPhone(initialData.phone || '');
      setSummary(initialData.summary || '');
      setLanguage(initialData.language || '');
      setStatus(initialData.status || '');
      setExpertise(initialData.expertise || []);
      setSkills(initialData.skills || []);
      setExperience(initialData.experience || []);
      setEducations(initialData.education || []);
      setLinkedin(initialData.linkedin || '');
      setCvResume(initialData.cvResume || '');
      setPortopolio(initialData.portopolio || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);
  const handleExpertise = (e, index) => {
    const updateExpertise = [...expertise];
    updateExpertise[index] = e.target.value;
    setExpertise(updateExpertise);
  };
  const handleSkills = (e, index) => {
    const updateSkills = [...skills];
    updateSkills[index] = e.target.value;
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
  const onClickSkills = (skill) => {
    const newSkill = {
      skill,
    };
    setSkills([...skills, newSkill]);
    setSkill('');
  };
  const onClickExpert = (expert) => {
    const newExpert = {
      expert,
    };
    setExpertise([...expertise, newExpert]);
    setExpert('');
  };
  const onClickExperience = ({ company, position, years }) => {
    const newExp = {
      company,
      position,
      years,
    };
    setExperience([...experience, newExp]);
  };
  const onClickEducation = ({ organization, major }) => {
    const newEdu = {
      organization,
      major,
    };
    setEducations([...educations, newEdu]);
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
        status,
        phone,
        summary,
        language,
        skills,
        expertise,
        linkedin,
        experience,
        educations,
        cvResume,
        portopolio,
      });
    }
    if (type === 'edit') {
      onSubmit({
        email,
        password,
        name,
        role,
        location,
        phone,
        summary,
        language,
        price,
        status,
        expertise,
        skills,
        experience,
        educations,
        linkedin,
        cvResume,
        portopolio,
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
          label={'Add Phone Mentor'}
          placeholder={'Enter mentor phone'}
          type="number"
          value={phone}
          onChange={onChangePhone}
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
        <FormInput
          label={'Add Language Mentor'}
          placeholder={'Enter Language mentor (Indonesia,English)'}
          type="text"
          value={language}
          onChange={onChangeLanguage}
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
        <FormInput
          label={'Add Status mentor'}
          placeholder={'Enter Status (mentor/validation/failed)'}
          type="text"
          value={status}
          onChange={onChangeStatus}
        />
      </Flex>
      <Flex columnGap={3}>
        <FormInput
          label={'Add CvResume Mentor'}
          placeholder={'Enter Resume (https://www/cvresume)'}
          type="text"
          value={cvResume}
          onChange={onChangeCvResume}
        />
        <FormInput
          label={'Add Portopolio Mentor'}
          placeholder={'Enter Portopolio (https://www/porto)'}
          type="text"
          value={portopolio}
          onChange={onChangePortopolio}
        />
      </Flex>
      <Flex columnGap={3}>
        <FormTextArea
          label={'Add Description Mentor'}
          placeholder={'Enter Description mentor'}
          value={summary}
          onChange={onChangeSummary}
        />
        <FormInput
          label={'Add Linkedin Mentor'}
          placeholder={'Enter Linkedin (https://www.linkedin.com)'}
          type="text"
          value={linkedin}
          onChange={onChangeLinkedin}
        />
      </Flex>
      {type === 'add' && (
        <Stack>
          <Group alignItems={'center'}>
            <Box>
              <FormInput
                label={'Add Skill Mentor'}
                placeholder={'Example (React/Testing)'}
                type="text"
                onChange={onChangeSkill}
                value={skill}
              />
            </Box>

            <Button
              mt={6}
              onClick={() => onClickSkills(skill)}
              bgColor={'gray.400'}
              color={'white'}
            >
              Add Skill
            </Button>
            <Group flexWrap={'wrap'}>
              {skills.map((item, index) => (
                <Button size={'xs'} mt={6} border={'1px solid teal'} key={index}>
                  {item.skill}
                </Button>
              ))}
            </Group>
          </Group>
          <Group alignItems={'center'}>
            <Box>
              <FormInput
                label={'Add Expertise Mentor'}
                placeholder={'Example (Data Science)'}
                type="text"
                onChange={onChangeExpert}
                value={expert}
              />
            </Box>

            <Button
              mt={6}
              onClick={() => onClickExpert(expert)}
              bgColor={'gray.400'}
              color={'white'}
            >
              Add Expertise
            </Button>
            <Group flexWrap={'wrap'}>
              {expertise.map((item, index) => (
                <Button size={'xs'} mt={6} border={'1px solid teal'} key={index}>
                  {item.expert}
                </Button>
              ))}
            </Group>
          </Group>
          <Group alignItems={'center'}>
            <Flex columnGap={2}>
              <FormInput
                label={'Add Company Mentor'}
                placeholder={'Example (Google Indonesia)'}
                type="text"
                onChange={onChangeCompany}
                value={company}
              />
              <FormInput
                label={'Add Position Mentor'}
                placeholder={'Example (Web App)'}
                type="text"
                onChange={onChangePosition}
                value={position}
              />
              <FormInput
                label={'How Long Year'}
                placeholder={'Example (5)'}
                type="number"
                onChange={onChangeYears}
                value={years}
              />
            </Flex>

            <Button
              mt={6}
              onClick={() => onClickExperience({ company, position, years })}
              bgColor={'gray.400'}
              color={'white'}
            >
              Add Experience
            </Button>

            <Group flexWrap={'wrap'}>
              {experience.map((item, index) => (
                <Button size={'xs'} mt={6} border={'1px solid teal'} key={index}>
                  {item.company}-{item.position}-{item.years}
                </Button>
              ))}
            </Group>
          </Group>
          <Group alignItems={'center'}>
            <Flex columnGap={2}>
              <FormInput
                label={'Organization Mentor'}
                placeholder={'Example (Universitas Indonesia)'}
                type="text"
                onChange={onChangeOrganization}
                value={organization}
              />
              <FormInput
                label={'Major Mentor'}
                placeholder={'Example (Computer Science)'}
                type="text"
                onChange={onChangeMajor}
                value={major}
              />
            </Flex>

            <Button
              mt={6}
              onClick={() => onClickEducation({ organization, major })}
              bgColor={'gray.400'}
              color={'white'}
            >
              Add Education
            </Button>

            <Group flexWrap={'wrap'}>
              {educations.map((item, index) => (
                <Button size={'xs'} mt={6} border={'1px solid teal'} key={index}>
                  {item.organization}-{item.major}
                </Button>
              ))}
            </Group>
          </Group>
        </Stack>
      )}
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
                    value={exp}
                    onChange={(e) => handleExpertise(e, index)}
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
                      value={skill}
                      onChange={(e) => handleSkills(e, index)}
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
