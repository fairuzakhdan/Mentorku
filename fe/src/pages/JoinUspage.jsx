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
import Layouts from '../components/Layouts/Layouts';
import { Link } from 'react-router';
import AvatarCard from '../components/Elements/Avatar';
import { MdOutlineAccessTime } from 'react-icons/md';
import { HiOutlineSupport } from 'react-icons/hi';
import { PiGift } from 'react-icons/pi';
import { GrMoney } from 'react-icons/gr';
import { SlBadge } from 'react-icons/sl';
import { IoIosPeople } from 'react-icons/io';
import IconColor from '../components/Elements/IconButton';
const JoinUspage = () => {
  const profits = [
    {
      title: 'Mengontrol waktu selalu',
      description:
        'Kami tidak membutuhkan anda untuk mematuhi waktu, jadwal, atau sejumlah tempat bimbingan. Anda memutuskan seperti apa tawaran Anda dan bagaimana Anda menyusun bimbingan',
      icon: MdOutlineAccessTime,
    },
    {
      title: 'Semua dukungan yang anda butuhkan',
      description:
        'Terlepas dari sumber daya dan tim dukungan kami, 1.000+ komunitas mentoring yang kuat selalu dengan senang hati membantu menjawab pertanyaan dan kekhawatiran',
      icon: HiOutlineSupport,
    },
    {
      title: 'Hadiah, fasilitas dan kolaborasi',
      description:
        'Dengan mentor di semua sisi industri, kami mengerjakan peluang bersama, memulai proyek, melakukan rujukan pekerjaan, berbagi pengetahuan. Bergabunglah dan jadilah bagian dari apa yang kami lakukan!',
      icon: PiGift,
    },
    {
      title: 'Uangkan keahlian Anda',
      description:
        'Ini perasaan yang baik untuk mendapatkan bayaran untuk membuat perbedaan. Tahukah Anda bahwa program mentoring berbayar memiliki tingkat keberhasilan hingga lima kali lebih tinggi daripada program gratis/sukarela?',
      icon: GrMoney,
    },
    {
      title: 'Tunjukan pencapaian Anda',
      description:
        'Profil mentor Anda tidak hanya mencakup paket pemesanan mentor Anda, tetapi juga testimonial terverifikasi, postingan blog, dan data kinerja. Cara sempurna untuk menampilkan perkembangan Anda sebagai pemimpin.',
      icon: SlBadge,
    },
    {
      title: 'Dunia Belajar Tanpa Batas',
      description:
        'Mentorku adalah program beragam yang menjangkau hampir 100 negara asal, mulai dari pendiri startup tahap awal hingga insinyur utama di Amazon dan desainer pemenang penghargaan.',
      icon: IoIosPeople,
    },
  ];
  return (
    <>
      <Box backgroundColor="textGreen">
        <Layouts>
          <Grid templateColumns="repeat(3, 1fr)" columnGap={5} pt={5}>
            <GridItem colSpan={1}>
              <Image src="src\assets\images\hero-textGreen.png" />
            </GridItem>
            <GridItem colSpan={2} p={5}>
              <Stack color={'white'} rowGap={5}>
                <Text fontSize={'4xl'} fontWeight={'semibold'}>
                  Bagikan keahlian Anda, kembangkan dan mari membuat perbedaan dengan Mentor On
                  Demand
                </Text>
                <Text>
                  Tingkatkan keterampilan digital, tambah portopolio, dan siapkan karir kamu untuk
                  jadi talenta digital handal bersama MentorKu #TwogetherWithMentorku
                </Text>

                <Text
                  backgroundColor={'#FFC107'}
                  width={'fit-content'}
                  px={3}
                  py={2}
                  color={'gray.600'}
                  fontWeight={'semibold'}
                  mt={3}
                  rounded={'lg'}
                >
                  <Link to="/joinus/add">Gabung Jadi Mentor </Link>
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Layouts>
      </Box>
      <Layouts>
        <Stack
          rowGap={5}
          mt={10}
          align={'center'}
          backgroundColor={'gray.100'}
          p={5}
          rounded={'xl'}
        >
          <Text fontSize={'xl'} textAlign={'center'} color={'gray.800'}>
            "Saya Mendapat beberapa panggilan telephone dengan Mentee minggu ini, dan setiap orang
            dari mereka sangat berwawasan, ceria, membangikan semangat dan penuh dengan pertukaran
            ide."
          </Text>
          <Group>
            <AvatarCard
              image="https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGVudGVwcmVuZXVyfGVufDB8fDB8fHww"
              rounded="full"
            />
            <Flex columnGap={2} fontSize={'lg'}>
              <Text>John Doe</Text>
              <Span fontWeight={'bold'}>/</Span>
              <Text color={'gray.600'}>Product Designer</Text>
            </Flex>
          </Group>
        </Stack>
      </Layouts>
      <Box mt={10} backgroundColor={'textGreen'}>
        <Layouts>
          <Stack textAlign={'center'} rowGap={5} color={'white'} py={14}>
            <Text fontSize={'3xl'} fontWeight={'semibold'}>
              Dipercaya oleh Mentee di seluruh dunia
            </Text>
            <Text fontSize={'lg'}>
              Mentor On Demand menarik para Mentee yang bersemangat dan sangat ambisius yang ingin{' '}
              <br />
              tumbuh dalam karir, bisnis, dan pembelajaran mereka
            </Text>
            <Group justifyContent={'center'} columnGap={14}>
              <Box>
                <Text fontSize={'6xl'} fontWeight={'bold'}>
                  97%
                </Text>
                <Text fontSize={'xl'}>Kepuasan</Text>
              </Box>
              <Box>
                <Text fontSize={'6xl'} fontWeight={'bold'}>
                  10,000+
                </Text>
                <Text fontSize={'xl'}>Mentee</Text>
              </Box>
              <Box>
                <Text fontSize={'6xl'} fontWeight={'bold'}>
                  +-$1M
                </Text>
                <Text fontSize={'xl'}>Dibayarkan ke Mentor</Text>
              </Box>
            </Group>
          </Stack>
        </Layouts>
      </Box>
      <Layouts>
        <Box mt={14}>
          <Stack rowGap={3} textAlign={'center'}>
            <Text fontSize={'xl'} color={'textGreen'}>
              Mentor On Demand
            </Text>
            <Text fontSize={'3xl'} fontWeight={'semibold'}>
              Mari Mulai bersama, kita disini untuk mendukung anda
            </Text>
            <Text fontSize={'2xl'}>
              Bermitra dengan MentorKu berarti Anda tidak perlu mengurus apapun selain yang <br />
              paling anda pedulikan
            </Text>
          </Stack>
          <Grid templateColumns={'repeat(2, 1fr)'} templateRows={'repeat(3, 1fr)'} gap={5} mt={5}>
            {profits.map((profit, index) => (
              <GridItem key={index} colSpan={1} rowSpan={1} p={3}>
                <Group columnGap={5} alignItems={'start'}>
                  <Box backgroundColor={'textGreen'} width={'fit-content'} p={2} rounded={'xl'}>
                    <profit.icon size={45} color="white" />
                  </Box>
                  <Box>
                    <Text fontSize={'xl'}>{profit.title}</Text>
                    <Text color={'gray.600'}>{profit.description}</Text>
                  </Box>
                </Group>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Layouts>
    </>
  );
};

export default JoinUspage;
