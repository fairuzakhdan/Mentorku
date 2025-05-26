import { Box, Flex, Stack, Group } from '@chakra-ui/react';
import { CheckBox } from '../Elements/FormInput';
import FormInput from '../Elements/FormInput';
import { FormTextArea } from '../Elements/FormInput';
import { FormSelect } from '../Elements/FormInput';
import { useState } from 'react';
const FormAddAboutMentor = ({ onSkillsChange }) => {
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
  const [selected, setSelected] = useState([]);
  const handleChange = (label) => {
    const updated = selected.includes(label)
      ? selected.filter((item) => item !== label)
      : [...selected, label];

    setSelected(updated);
    onSkillsChange?.(updated);
  };

  return (
    <Box>
      <Flex display={'flex'} flexWrap={'wrap'} gap={5}>
        {labels.map((i, index) => (
          <CheckBox key={index} label={i.label} onChange={() => handleChange(i.label)} />
        ))}
      </Flex>
      <Flex mt={8} columnGap={5}>
        <Stack flex={1} rowGap={5}>
          <FormTextArea
            label={'Bio / Summary'}
            placeholder={
              'Ceritakan kepada kami sedikit tentang diri Anda. Bicaralah tentang diri anda sebenarnya.'
            }
            required
          />
          <FormSelect label={'Bahasa'} values={[{ value: 'Indonesia' }, { value: 'English' }]} />
        </Stack>
        <Stack flex={1} rowGap={5}>
          <FormInput label={'LinkedIn URL (optional)'} placeholder={'Masukkan LinkedIn URL'} />
        </Stack>
      </Flex>
    </Box>
  );
};

export default FormAddAboutMentor;
