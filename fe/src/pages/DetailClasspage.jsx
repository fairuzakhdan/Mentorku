import Navigation from '../components/Layouts/Navigation';
import { Box, Grid, GridItem, Text, Flex, Stack, Group } from '@chakra-ui/react';
import BreadcrumbLink from '../components/Fragments/Breadcrumb';
import { VscFolderLibrary } from 'react-icons/vsc';
import { PiBooksBold } from 'react-icons/pi';
import { useParams } from 'react-router';
import Ratio from '../components/Elements/Ratio';
import TabsLink from '../components/Fragments/Tabs';
import { useEffect, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import CardBox from '../components/Fragments/CardBox';
import Modal from '../components/Fragments/Modal';

const DetailClasspage = () => {
  const { classId } = useParams();
  const [activeVideo, setActiveVideo] = useState([]);
  const modul = [
    {
      id: '1',
      link: 'https://youtu.be/jCb9fpPrxLc?si=72IANTq2kVB8C_-b',
      title: 'Berpikir Secara Computational Thinking',
      createdAT: '2023-06-01',
      owner: 'John Doe',
    },
    {
      id: '2',
      link: 'https://youtu.be/oa-n-ppT-dk?si=T6Bik5ZkazfzB7j3',
      title: 'Pengenalan Komputasi',
      createdAT: '2023-06-01',
      owner: 'John Doe',
    },
  ];
  const articles = [
    {
      id: '1',
      header: 'Computational Thinking & Problem Solving',
      title: 'Apa itu computational thinking?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,ccusamus nihil ducimus quae exercitationem impedit eligendi architecto natus suscipit numquam, blanditiis voluptatibus cupiditate? Eaque , consequuntur accusamus maxime distinctio accusantium, harum nobis expedita minima inventore libero blanditiis voluptatibus cupiditate? Eaque. Esse, temporibus suscipit? Deleniti quo minima voluptas fugit inventore? Omnis provident exercitationem, officia qui consequatur culpa quidem, consequuntur accusamus maxime distinctio accusantium, harum nobis expedita minima inventore libero explicabo perspiciatis. Quos, deserunt. Voluptatem laborum nisi sunt delectus necessitatibus sapiente repellendus magni ipsum laboriosam, pariatur vero optio obcaecati corrupti? Quis, dolore assumenda et ab corrupti culpa. Itaque eveniet sint amet tempore? Quibusdam, enim? Commodi voluptate maiores placeat dolorum unde debitis iste itaque sunt laboriosam temporibus. Numquam at sunt est magni ab reiciendis velit natus, minus eum perspiciatis nemo maxime adipisci explicabo. Autem labore ex atque sit accusantium quae architecto officiis dolorum asperiores a perspiciatis vitae expedita qui placeat libero repellat ipsa illum provident, facilis enim. Expedita impedit velit soluta illum tempora! Ducimus, nihil maiores? Asperiores assumenda voluptatum rerum ipsam tempore cumque, esse aperiam enim modi? Dolor doloremque sed  recusandae quisquam, repellendus itaque consectetur aut tenetur deleniti ipsa officia iste atque voluptatibus! Dolore, beatae velit repudiandae aliquid veritatis expedita temporibus deserunt impedit voluptatem maiores eligendi tenetur ipsum quos earum obcaecati modi praesentium doloribus quia. Inventore maxime ipsam voluptatem maiores hic, exercitationem quaerat! luptatem sunt dicta beatae, voluptate laborum at. Minima, vero. Sapiente ex quisquam mollitia exercitationem cupiditate sint, do Voluptatem sunt dicta beatae, voluptate lab orum at. Minima, vero. Sapiente ex quisquam  tionem quaerat! luptatem sunt dicta beatae, voluptate  vero. Sapiente ex quisquam mollitia exercitationem cupiditate sint, do Voluptatem sunt dicta beatae, voluptate lab oru laborum at. Minima, vero. Sapiente ex quisquam mollitia exercitmollitia exercitationem cupiditate sint, dolore!',
    },
  ];
  const task = [
    {
      id: '1',
      category: 'Computational Thinking',
      title: 'Buatlah Studi Kasus Penerapan Computational Thinking dalam Kehidupan Sehari-hari',
      description:
        'Mahasiswa diminta untuk membuat contoh kasus nyata dari kehidupan sehari-hari (misalnya: memesan makanan online, menyusun jadwal belajar, atau mengatur keuangan), lalu menerapkannya dengan empat tahapan Computational Thinking (Decomposition, Pattern Recognition, Abstraction, Algorithm Design)',
    },
    {
      id: '2',
      category: 'Computational Thinking',
      title: 'Buatlah Studi Kasus Penerapan Computational Thinking dalam Kehidupan Sehari-hari',
      description:
        'Mahasiswa diminta untuk membuat contoh kasus nyata dari kehidupan sehari-hari (misalnya: memesan makanan online, menyusun jadwal belajar, atau mengatur keuangan), lalu menerapkannya dengan empat tahapan Computational Thinking (Decomposition, Pattern Recognition, Abstraction, Algorithm Design)',
    },
    {
      id: '3',
      category: 'Computational Thinking',
      title: 'Kembangkan Sebuah Proyek Mini yang Menerapkan Konsep Computational Thinking',
      description:
        'Tugas ini mengajak mahasiswa untuk merancang dan menjelaskan proyek mini berbasis teknologi atau non-teknologi yang menunjukkan pemahaman terhadap konsep CT. Gunakan tahapan decomposition, abstraction, pattern recognition, dan algorithm.',
    },
    {
      id: '4',
      category: 'Computational Thinking',
      title: 'Kembangkan Sebuah Proyek Mini yang Menerapkan Konsep Computational Thinking',
      description:
        'Tugas ini mengajak mahasiswa untuk merancang dan menjelaskan proyek mini berbasis teknologi atau non-teknologi yang menunjukkan pemahaman terhadap konsep CT. Gunakan tahapan decomposition, abstraction, pattern recognition, dan algorithm.',
    },
  ];
  const links = [
    {
      href: '/mentors/class',
      title: 'Kelas Saya',
      icon: VscFolderLibrary,
    },
    {
      href: '/mentors/class/' + classId,
      title: 'Kelas Saya',
      icon: PiBooksBold,
    },
  ];
  useEffect(() => {
    if (modul.length > 0) {
      setActiveVideo(modul[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navigation type="sidebar">
        <Box marginLeft="10" marginRight="16" color="textBlue" mt={5}>
          <BreadcrumbLink links={links} color="textBlue" size="md" />
          <Box mt={3} rounded="lg" border={'1px solid #ccc'}>
            <TabsLink
              tabs={[
                {
                  label: 'Video Lessons',
                  value: 'video',
                  content: (
                    <Grid templateColumns="repeat(5, 1fr)" maxHeight={500}>
                      <GridItem colSpan={4}>
                        <Ratio link={activeVideo.link} title={activeVideo.title} />
                      </GridItem>
                      <GridItem colSpan={1} padding={4} overflowY="auto">
                        {modul.map((item) => (
                          <Box
                            key={item.id}
                            display={'flex'}
                            bgColor={activeVideo.id === item.id ? 'green.200' : 'white'}
                            p={2}
                            flexDirection={'column'}
                            mb={4}
                            onClick={() => setActiveVideo(item)}
                            cursor={'pointer'}
                          >
                            <Text fontWeight="semibold" fontSize="sm">
                              {item.title}
                            </Text>
                            <Box fontSize="xs" color="gray.600">
                              {item.owner} – {new Date(item.createdAT).toLocaleDateString()}
                            </Box>
                          </Box>
                        ))}
                      </GridItem>
                    </Grid>
                  ),
                },
                {
                  label: 'Articles',
                  value: 'articles',
                  content: (
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                      overflowY="auto"
                      maxHeight={450}
                    >
                      {articles.map((article) => (
                        <Stack overflowY="auto" p={5} mb={3}>
                          <Text fontSize="xl" fontWeight="bold" color="textGreen">
                            {article.header}
                          </Text>
                          <Text fontSize="lg" color="gray.600" fontWeight="semibold">
                            {article.title}
                          </Text>
                          <Text fontSize="sm" color="gray.600" textAlign={'justify'}>
                            {article.description}
                          </Text>
                        </Stack>
                      ))}
                    </Box>
                  ),
                },
                {
                  label: 'Task',
                  value: 'task',
                  content: (
                    <Group p={3} gap={5} flexWrap="wrap" justifyContent={'space-between'}>
                      {task.map((task) => (
                        <>
                          <CardBox
                            width={300}
                            shadow="none"
                            key={task.id}
                            hover={{ transform: 'scale(1)', backgroundColor: 'gray' }}
                            backgroundColor="gray.600"
                          >
                            <Flex p={3} alignItems={'center'}>
                              <FaTasks color="#FFC107" size={20} />
                              <CardBox.Header name={task.category} fontSize="sm" />
                            </Flex>
                            <Modal
                              label="View Detail Task"
                              title={task.title}
                              description={task.description}
                            />
                          </CardBox>
                        </>
                      ))}
                    </Group>
                  ),
                },
              ]}
            />
          </Box>
        </Box>
      </Navigation>
    </>
  );
};

export default DetailClasspage;
