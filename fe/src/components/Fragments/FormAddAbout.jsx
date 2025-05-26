import { Box, Flex, Stack, Group, Text } from '@chakra-ui/react';
import { CheckBox } from '../Elements/FormInput';
import FormInput from '../Elements/FormInput';
import { FormTextArea } from '../Elements/FormInput';
const FormAddAboutMentor = ({
  onSkillsChange,
  valueSummary,
  valueLinkedIn,
  valueLanguage,
  setLanguage,
  onChangeLinkedIn,
  onChangeSummary,
  skills,
}) => {
  const labels = [
    { label: 'Javascript' },
    { label: 'Python' },
    { label: 'Figma' },
    { label: 'Java' },
    { label: 'TypeScript' },
    { label: 'Tensorflow' },
    { label: 'React' },
    { label: 'Next.js' },
    { label: 'Unity' },
    { label: 'Blender' },
    { label: 'GIT' },
    { label: 'Flutter' },
    { label: 'CorelDraw' },
    { label: 'Keras' },
    { label: 'OpenCV' },
    { label: 'Flask' },
    { label: 'Docker' },
    { label: 'Node.js' },
    { label: 'Golang' },
    { label: 'Jest' },
    { label: 'MySQL' },
    { label: 'MongoDB' },
    { label: 'PostgreSQL' },
    { label: 'Postman' },
    { label: 'Kubernetes' },
    { label: 'Linux' },
    { label: 'Google Colab' },
    { label: 'AWS Cloud' },
    { label: 'Adobe XD' },
    { label: 'Android Studio' },
    { label: 'Automation Test' },
    { label: 'React Native' },
  ];

  const languages = [{ label: 'Indonesia' }, { label: 'English' }];
  const handleChangeSkills = (label) => {
    const updated = skills.includes(label)
      ? skills.filter((item) => item !== label)
      : [...skills, label];

    onSkillsChange?.(updated);
  };
  const handleChangeLanguage = (label) => {
    const updated = valueLanguage.includes(label)
      ? valueLanguage.filter((item) => item !== label)
      : [...valueLanguage, label];
    setLanguage?.(updated);
  };
  return (
    <Box>
      <Flex display={'flex'} flexWrap={'wrap'} gap={5}>
        {labels.map((i, index) => (
          <CheckBox key={index} label={i.label} onChange={() => handleChangeSkills(i.label)} />
        ))}
      </Flex>
      <Flex mt={8} columnGap={5}>
        <Stack flex={1} rowGap={5}>
          <FormTextArea
            label={'Bio / Summary'}
            placeholder={
              'Ceritakan kepada kami sedikit tentang diri Anda. Bicaralah tentang diri anda sebenarnya.'
            }
            value={valueSummary}
            onChange={onChangeSummary}
            required
          />
          <Box>
            <Text>Bahasa</Text>
            <Group>
              {languages.map((i, index) => (
                <CheckBox
                  label={i.label}
                  key={index}
                  onChange={() => handleChangeLanguage(i.label)}
                />
              ))}
            </Group>
          </Box>
        </Stack>
        <Stack flex={1} rowGap={5}>
          <FormInput
            label={'LinkedIn URL (optional)'}
            placeholder={'Masukkan LinkedIn URL'}
            value={valueLinkedIn}
            onChange={onChangeLinkedIn}
          />
        </Stack>
      </Flex>
    </Box>
  );
};

export default FormAddAboutMentor;
