'use client';
import Layouts from '../components/Layouts/Layouts';
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
import StepsProcess from '../components/Fragments/Steps';
import IconColor from '../components/Elements/IconButton';
import { BsInfoCircleFill } from 'react-icons/bs';
import FormInput from '../components/Elements/FormInput';
import { FormSelect } from '../components/Elements/FormInput';
import { PasswordInput } from '@/components/ui/password-input';

const AddContent = () => {
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
    </Box>
  );
};

const AddMentorpage = () => {
  const steps = [
    {
      title: 'Profil',
      description: 'Kenali siapa dirimu, Lengkapi informasi dasar seperti nama, email dan password',
      content: <AddContent />,
    },
    {
      title: 'Tentang Kamu',
      description:
        'Latar belakang pendidikan, keahlian, serta nilai-nilai yang membentuk dirimu saat ini.',
    },
    {
      title: 'Pengalaman',
      description:
        'Bagikan pengalaman kerja, posisi pekerjaan, atau kegiatan relevan yang menunjukkan kemampuan dan kontribusimu.',
    },
  ];
  return (
    <Layouts>
      <Box color={'gray.600'} mt={5}>
        <Text fontSize={'3xl'} fontWeight={'semibold'}>
          Apply as a Mentor
        </Text>
        <Box mt={5}>
          <StepsProcess steps={steps} />
        </Box>
      </Box>
    </Layouts>
  );
};

export default AddMentorpage;
